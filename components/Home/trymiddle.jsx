"use client";
import Link from 'next/link';
import React from 'react'
import { useState, useEffect } from 'react'

export default function trymiddle() {
    const [repos, setRepos] = useState([]);
    useEffect(() => {
        const fetchRepos = async() => {
            try {
                const res = await fetch("/api/repos")
            const data = await res.json()
            setRepos(Array.isArray(data) ? data : [])
            } catch {
                return;
            }
        }
        fetchRepos([])
    }, [])
  return (
    <section className="flex flex-col gap-4 mb-12">
        <h1 className="text-2xl font-semibold text-white">My Github repositories</h1>
        <div className="flex items-center justify-center">
            <div className="absolute mt-56 h-32 w-56 blur-[400px] bg-indigo-50 pointer-events-none"></div>
        </div>
        <div className="grid grid-col gap-6 xl:grid-cols-3 2xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2">
            {repos.map((item, index) => (
                <Link href={`https://github.com/${item.full_name}`} key={index} className="bg-secondary-bg-color p-4 rounded-lg border-t-2 border-secondary-border-color transition-colors cursor-pointer hover:bg-secondary-border-color">
                    <div className="flex justify-between">
                        <p className="text-white font-semibold">{item.name}</p>
                        <div className="flex items-center gap-1">
                            <p>{item.stargazers_count}</p>
                            <i className="fa-solid text-yellow-500 fa-star"/>
                        </div>
                    </div>
                    <p className="text-[13px]">{new Date(item.created_at).toLocaleDateString("tr-TR")}</p>
                <p>{item.description || "Description is not found."}</p>
                </Link>
            )) || <p>Repositories is not found.</p>}
        </div>
    </section>
  )
}
