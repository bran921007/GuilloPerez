"use client";

import { useState } from "react";
import { FeaturedPost } from "./sections/FeaturedPost";
import { BlogGrid } from "./sections/BlogGrid";
import { Sidebar } from "./sections/Sidebar";
import { SearchBar } from "./sections/SearchBar";
import { Pagination } from "./sections/Pagination";

export function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-serif mb-6">Blog de Arte</h1>
      <p className="text-lg text-muted-foreground mb-12">
        Explora nuestras últimas publicaciones sobre arte, artistas y eventos culturales
      </p>

      <SearchBar onSearch={setSearchQuery} />
      
      <div className="mt-12">
        <FeaturedPost />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
        <div className="lg:col-span-2">
          <BlogGrid 
            searchQuery={searchQuery}
            currentPage={currentPage}
            selectedCategory={selectedCategory}
          />
          <Pagination 
            currentPage={currentPage}
            totalPages={5}
            onPageChange={setCurrentPage}
          />
        </div>
        
        <Sidebar 
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
        />
      </div>
    </div>
  );
}