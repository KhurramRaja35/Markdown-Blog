import fs from "fs/promises"
import matter from "gray-matter"
import { notFound } from "next/navigation"
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { unified } from 'unified'
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from '@rehype-pretty/transformers'
import path from "path"

// addition for vercel....
export async function generateStaticParams() {

    try {
        const files = await fs.readdir(path.join(process.cwd(), 'content'));
        const params = await Promise.all(
            files.map(async (file) => {
                const fileContent = await fs.readFile(path.join(process.cwd(), 'content', file), 'utf-8');
                const { data } = matter(fileContent);
                return { slug: data.slug || file.replace(/\.md$/, '') };
            })
        );
        return params;
    } catch (error) {
        console.error('Error reading content directory:', error);
        return [];
    }

    // const files = await fs.readdir(path.join(process.cwd(), 'content'));
    // return files.map((file) => ({
    //     slug: file.replace(/\.md$/, ''),
    // }));
}




export default async function Page({ params }) {
    const { slug } = await params

    //for vercel ...
    const filePath = path.join(process.cwd(), 'content', `${params.slug}.md`);



    // my basic logic
    // const filePath = `content/${params.slug}.md`
    // if (!fs.existsSync(filePath)) {
    //     notFound()
    //     return
    // }

    try {
        const fileContent = await fs.readFile(filePath, "utf-8")
        const { content, data } = matter(fileContent)

        const processor = unified()
            .use(remarkParse)
            .use(remarkRehype)
            .use(rehypeDocument, { title: slug })
            .use(rehypeFormat)
            .use(rehypePrettyCode, {
                theme: "one-dark-pro",
                keepBackground: true, // try setting this to true
                defaultLang: 'js',
                transformers: [
                    transformerCopyButton({
                        visibility: 'hover',
                        feedbackDuration: 2_000,
                    }),
                ],
            })
            .use(rehypeStringify)


        const htmlContent = (await processor.process(content)).toString()

        // ap documentation wala code b likh skty ho r neechy dangerously set html me phly hm ny content likha tha q k hmri md file ka content, content object me tha jo k gray matter hmy default me deta hai ab hm ny usy htmlContent me process krwaya .process jo k remark/rehype ka object hai  r ye content ko process krta mtlb html me convert krta hai..


        return (


            <div className="max-w-5xl mx-auto px-4 py-8 ">
                <article className=" rounded-lg shadow-lg overflow-hidden ">
                    <div className="p-6">
                        <h1 className="text-4xl font-bold mb-4">{data.title}</h1>
                        <p className="text-lg  mb-2 italic border-l-4 border-indigo-500 pl-4">
                            &quot;{data.description}&quot;
                        </p>
                        <div className="flex  items-center text-sm  mb-6">
                            <span className="mr-4">
                                <span className="font-medium">By {data.author}</span>
                            </span>
                            <span>{new Date(data.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            })}</span>
                        </div>

                        <div
                            className="prose dark:prose-invert max-w-none "
                            dangerouslySetInnerHTML={{ __html: htmlContent }}>
                        </div>
                    </div>
                </article>
            </div>

        )
    } catch (error) {
    notFound();
  }
}
