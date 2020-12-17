import React from "react"
import { Link } from "gatsby"

function BlogCard({ title, date, description, slug, className }) {
  return (
    <section className={className}>
      <Link to={`/${slug}`}>
        <h1 className="text-3xl text-green-400 uppercase font-bold mb-2">
          {title}
        </h1>
      </Link>
      <time className="text-sm text-gray-400">{date}</time>
      <div>{description}</div>
    </section>
  )
}

export default BlogCard
