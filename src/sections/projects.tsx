"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center space-y-8 mb-16">
          <h2 className="text-4xl font-bold text-center">Projects</h2>
          <p className="text-lg text-center text-gray-500">
            Here are some of the projects I&apos;ve worked on.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            className="flex flex-col items-start space-y-4 rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/cover-green-thumb.png"
              alt="Green Thumb Project Preview"
              className="rounded-lg w-full h-auto object-cover"
              width={400}
              height={225}
            />
            <h3 className="text-2xl font-bold">Green Thumb</h3>
            <p className="text-lg text-gray-500">
              A smart indoor gardening system built with Next.js, Tailwind CSS,
              TypeScript, shadcn, and Framer Motion.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://green-thumb-mu.vercel.app/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
              <a
                href="https://github.com/DrakeAlia/green-thumb"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </div>
          </motion.div>

          {/* Additional Project Card */}
          <motion.div
            className="flex flex-col items-start space-y-4 rounded-lg shadow-md p-6"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/images/cover-book-reviews.png"
              alt="Another Project Preview"
              className="rounded-lg w-full h-auto object-cover"
              width={400}
              height={225}
            />
            <h3 className="text-2xl font-bold">Book Reviews</h3>
            <p className="text-lg text-gray-500">
              A book review app where users can add, edit, and delete reviews.
              Built with Next.js, Tailwind CSS, TypeScript, and MongoDB.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="https://book-reviews-orcin.vercel.app/"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Project
              </a>
              <a
                href="https://github.com/DrakeAlia/book-reviews"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                View Source
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
