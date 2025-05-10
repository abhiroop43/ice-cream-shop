'use client';

import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const CategorySelector = () => {
  const categories = ['All', 'Cones', 'Tubs', 'Sorbets & Gelato', 'Frozen Yogurt', 'Novelties', 'Vegan', 'Specials'];
  const [activeCategory, setActiveCategory] = useState('All');
  return (
    <div className="flex flex-row items-center justify-between gap-2 mt-7">
      {categories.map((category) => (
        <Button
          key={category}
          variant={activeCategory === category ? 'reverse' : 'reverseNeutral'}
          onClick={() => setActiveCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
