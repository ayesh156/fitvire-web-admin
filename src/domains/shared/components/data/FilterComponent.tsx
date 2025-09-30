/**
 * Filter Component - FitVire Admin Design System
 * Dropdown filter component with proper positioning and animations
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ChevronDown, Check } from 'lucide-react';

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

interface FilterProps {
  label: string;
  options: FilterOption[];
  selectedValues: string[];
  onSelectionChange: (values: string[]) => void;
  placeholder?: string;
  multiSelect?: boolean;
  className?: string;
}

const FilterComponent: React.FC<FilterProps> = ({
  label,
  options,
  selectedValues,
  onSelectionChange,
  placeholder = "Select options",
  multiSelect = true,
  className = ""
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  const handleOptionClick = (value: string) => {
    if (multiSelect) {
      const newSelection = selectedValues.includes(value)
        ? selectedValues.filter(v => v !== value)
        : [...selectedValues, value];
      onSelectionChange(newSelection);
    } else {
      onSelectionChange([value]);
      setIsOpen(false);
    }
  };

  const getDisplayText = () => {
    if (selectedValues.length === 0) return placeholder;
    if (selectedValues.length === 1) {
      const option = options.find(opt => opt.value === selectedValues[0]);
      return option?.label || selectedValues[0];
    }
    return `${selectedValues.length} selected`;
  };

  return (
    <div className={`relative ${className}`}>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 hover:border-gray-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500"
      >
        <Filter className="w-4 h-4" />
        <span className="text-sm font-medium">{label}</span>
        {selectedValues.length > 0 && (
          <span className="bg-brand-600 text-white text-xs px-2 py-0.5 rounded-full">
            {selectedValues.length}
          </span>
        )}
        <ChevronDown 
          className={`w-4 h-4 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 mt-2 w-64 bg-gray-800 border border-gray-600 rounded-lg shadow-xl z-50"
          >
            <div className="p-3 border-b border-gray-700">
              <h3 className="text-sm font-medium text-white">{label}</h3>
              <p className="text-xs text-gray-400 mt-1">{getDisplayText()}</p>
            </div>
            
            <div className="max-h-60 overflow-y-auto">
              {options.map((option) => {
                const isSelected = selectedValues.includes(option.value);
                return (
                  <button
                    key={option.value}
                    onClick={() => handleOptionClick(option.value)}
                    className={`
                      w-full flex items-center justify-between px-4 py-3 text-sm text-left hover:bg-gray-700 transition-colors duration-150
                      ${isSelected ? 'bg-brand-900/30 text-brand-300' : 'text-gray-300'}
                    `}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`
                        w-4 h-4 rounded border-2 flex items-center justify-center transition-colors duration-150
                        ${isSelected 
                          ? 'bg-brand-600 border-brand-600' 
                          : 'border-gray-500 hover:border-gray-400'
                        }
                      `}>
                        {isSelected && <Check className="w-3 h-3 text-white" />}
                      </div>
                      <span className="font-medium">{option.label}</span>
                    </div>
                    
                    {option.count !== undefined && (
                      <span className="text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
                        {option.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            {multiSelect && selectedValues.length > 0 && (
              <div className="p-3 border-t border-gray-700 flex justify-between items-center">
                <span className="text-xs text-gray-400">
                  {selectedValues.length} of {options.length} selected
                </span>
                <button
                  onClick={() => onSelectionChange([])}
                  className="text-xs text-brand-400 hover:text-brand-300 font-medium"
                >
                  Clear All
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FilterComponent;