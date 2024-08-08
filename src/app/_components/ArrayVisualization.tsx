'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ArrayVisualization: React.FC = () => {
  const [array, setArray] = useState<number[]>([1, 3, 5, 7, 9]);
  const [newValue, setNewValue] = useState<string>('');
  const [searchValue, setSearchValue] = useState<string>('');
  const [searchResult, setSearchResult] = useState<number | string | null>(null);

  const handleInsert = () => {
    if (newValue !== '') {
      setArray([...array, parseInt(newValue)]);
      setNewValue('');
    }
  };

  const handleDelete = (index: number) => {
    setArray(array.filter((_, i) => i !== index));
  };

  const handleSearch = () => {
    const index = array.indexOf(parseInt(searchValue));
    setSearchResult(index !== -1 ? index : 'Not found');
  };

  return (
    <div className="p-4 bg-white/10 rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-white">Array Visualization</h2>
      <div className="flex mb-4 flex-wrap">
        {array.map((value, index) => (
          <motion.div
            key={index}
            className="w-12 h-12 bg-[hsl(280,100%,70%)] text-white flex items-center justify-center m-1 cursor-pointer"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => handleDelete(index)}
          >
            {value}
          </motion.div>
        ))}
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          className="border p-2 mr-2 bg-white/20 text-white"
          placeholder="New value"
        />
        <button onClick={handleInsert} className="bg-[hsl(280,100%,70%)] text-white p-2 rounded">
          Insert
        </button>
      </div>
      <div className="mb-4">
        <input
          type="number"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="border p-2 mr-2 bg-white/20 text-white"
          placeholder="Search value"
        />
        <button onClick={handleSearch} className="bg-[hsl(280,100%,70%)] text-white p-2 rounded">
          Search
        </button>
        {searchResult !== null && (
          <span className="ml-2 text-white">Result: {searchResult}</span>
        )}
      </div>
    </div>
  );
};

export default ArrayVisualization;