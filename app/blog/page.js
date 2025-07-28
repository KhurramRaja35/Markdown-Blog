import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import fs from "fs";
import matter from 'gray-matter';

const dirContent = fs.readdirSync("content", "utf-8")
const blogs = dirContent.map(file=>{
    const fileContent = fs.readFileSync(`content/${file}`, "utf-8")
    const {data} =  matter(fileContent)

    // Convert tags string to array if it exists
    if (data.tags && typeof data.tags === 'string') {
        data.tags = data.tags.split(',').map(tag => tag.trim())
    } else if (!data.tags) {
        // Provide a default empty array if tags don't exist
        data.tags = []
    }
    
    return data
})

const Blog = () => {

    return (
        <main className='' >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
            <h1 className="text-4xl font-bold text-center mb-12 ">Our Blog Posts</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-cols-fr auto-rows-fr">
                {blogs.map((post) => (
                    <div
                        key={post.id}
                        className=" rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full border border-gray-200"
                    >
                        <div className="relative h-48 overflow-hidden">
                            <Image
                                src={post.imageUrl}
                                alt={post.title}
                                width={500}
                                height={300}
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                responsive="true"
                                priority
                            />
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                            <div className="flex items-center space-x-2 mb-2 text-sm ">
                                <span>{post.author}</span>
                                <span>•</span>
                                <span>{post.date}</span>
                            </div>

                            <h2 className="text-xl font-semibold mb-3  hover:text-blue-600 transition-colors">
                                <Link href={`/blogpost/${post.slug}`} className="hover:underline">
                                    {post.title}
                                </Link>
                            </h2>

                            <p className=" mb-4 flex-grow">{post.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {post.tags.map((tag, index) => (
                                    <span
                                        key={index}
                                        className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-blue-100 hover:text-blue-800 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <Button asChild> 
                                {/*  //using button as link u have to add the attribute asChild */}
                                <Link
                                    href={`/blogpost/${post.slug}`}
                                    className="inline-block hover:text-blue-600 font-medium  mt-auto self-start"
                                >
                                    Read More →
                                </Link>
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        </main>
    )
}

export default Blog