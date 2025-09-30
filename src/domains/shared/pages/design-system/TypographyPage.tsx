/**
 * Typography Design System Page
 * Showcase of typography scale, font families, and text treatments
 */

import React from 'react';
import { motion } from 'framer-motion';
import { Type, AlignLeft } from 'lucide-react';
import GlassCard from '../../components/ui/GlassCard';
import Badge from '../../components/ui/Badge';

export const TypographyPage: React.FC = () => {
  const headingScale = [
    { name: 'Heading 1', class: 'text-5xl', size: '3rem / 48px', weight: 'font-bold', usage: 'Page titles' },
    { name: 'Heading 2', class: 'text-4xl', size: '2.25rem / 36px', weight: 'font-bold', usage: 'Section headers' },
    { name: 'Heading 3', class: 'text-3xl', size: '1.875rem / 30px', weight: 'font-bold', usage: 'Subsection titles' },
    { name: 'Heading 4', class: 'text-2xl', size: '1.5rem / 24px', weight: 'font-semibold', usage: 'Card headers' },
    { name: 'Heading 5', class: 'text-xl', size: '1.25rem / 20px', weight: 'font-semibold', usage: 'Small headers' },
    { name: 'Heading 6', class: 'text-lg', size: '1.125rem / 18px', weight: 'font-semibold', usage: 'Inline headers' },
  ];

  const bodyScale = [
    { name: 'Body Large', class: 'text-lg', size: '1.125rem / 18px', weight: 'font-normal', usage: 'Intro text, important content' },
    { name: 'Body', class: 'text-base', size: '1rem / 16px', weight: 'font-normal', usage: 'Default body text' },
    { name: 'Body Small', class: 'text-sm', size: '0.875rem / 14px', weight: 'font-normal', usage: 'Secondary content, captions' },
    { name: 'Caption', class: 'text-xs', size: '0.75rem / 12px', weight: 'font-normal', usage: 'Helper text, labels' },
  ];

  const fontWeights = [
    { name: 'Light', class: 'font-light', weight: '300', usage: 'Decorative text' },
    { name: 'Normal', class: 'font-normal', weight: '400', usage: 'Body text' },
    { name: 'Medium', class: 'font-medium', weight: '500', usage: 'Emphasized text' },
    { name: 'Semibold', class: 'font-semibold', weight: '600', usage: 'Headings, labels' },
    { name: 'Bold', class: 'font-bold', weight: '700', usage: 'Strong emphasis' },
    { name: 'Extrabold', class: 'font-extrabold', weight: '800', usage: 'High impact' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl font-bold text-white mb-2">Typography</h2>
        <p className="text-neutral/70 text-lg">
          Font families, type scale, and text styling for the FitVire platform
        </p>
      </motion.div>

      {/* Font Family */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <Type className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Font Families</h3>
          </div>
          
          <div className="space-y-6">
            <div className="p-6 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold mb-1">Inter (Primary)</h4>
                  <p className="text-neutral/60 text-sm">Used for all UI text, headings, and body content</p>
                </div>
                <Badge variant="primary" size="sm">Default</Badge>
              </div>
              <p className="text-white text-2xl font-normal mb-2">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-neutral/70 text-sm font-mono">
                font-family: 'Inter', system-ui, -apple-system, sans-serif
              </p>
            </div>

            <div className="p-6 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h4 className="text-white font-semibold mb-1">Monospace (Code)</h4>
                  <p className="text-neutral/60 text-sm">Used for code snippets, technical values, and data</p>
                </div>
                <Badge variant="secondary" size="sm">Code</Badge>
              </div>
              <p className="text-white text-lg font-mono mb-2">
                The quick brown fox jumps over the lazy dog
              </p>
              <p className="text-neutral/70 text-sm font-mono">
                font-family: 'Fira Code', 'Courier New', monospace
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Heading Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard padding="lg" variant="surface">
          <div className="flex items-center space-x-3 mb-6">
            <div className="p-3 bg-primary/20 rounded-xl">
              <AlignLeft className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-white">Heading Scale</h3>
          </div>

          <div className="space-y-6">
            {headingScale.map((heading, index) => (
              <motion.div
                key={heading.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.05 }}
                className="p-6 bg-surface/20 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
                  <div>
                    <h4 className="text-white font-semibold">{heading.name}</h4>
                    <p className="text-neutral/60 text-xs">{heading.usage}</p>
                  </div>
                  <div className="text-neutral/70 text-sm">
                    <div className="font-mono">{heading.size}</div>
                  </div>
                  <div className="text-neutral/70 text-sm">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">
                      {heading.class}
                    </code>
                  </div>
                  <div className="text-neutral/70 text-sm">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">
                      {heading.weight}
                    </code>
                  </div>
                </div>
                <div className={`${heading.class} ${heading.weight} text-white`}>
                  The quick brown fox jumps over the lazy dog
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Body Text Scale */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Body Text Scale</h3>
          
          <div className="space-y-6">
            {bodyScale.map((body, index) => (
              <motion.div
                key={body.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + index * 0.05 }}
                className="p-6 bg-surface/20 rounded-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center mb-4">
                  <div>
                    <h4 className="text-white font-semibold">{body.name}</h4>
                    <p className="text-neutral/60 text-xs">{body.usage}</p>
                  </div>
                  <div className="text-neutral/70 text-sm">
                    <div className="font-mono">{body.size}</div>
                  </div>
                  <div className="text-neutral/70 text-sm">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">
                      {body.class}
                    </code>
                  </div>
                  <div className="text-neutral/70 text-sm">
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">
                      {body.weight}
                    </code>
                  </div>
                </div>
                <div className={`${body.class} ${body.weight} text-neutral/80 leading-relaxed`}>
                  The quick brown fox jumps over the lazy dog. Typography is the art and technique 
                  of arranging type to make written language legible, readable, and appealing.
                </div>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Font Weights */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <GlassCard padding="lg" variant="elevated">
          <h3 className="text-xl font-bold text-white mb-6">Font Weights</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {fontWeights.map((weight, index) => (
              <motion.div
                key={weight.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className="p-5 bg-surface/20 rounded-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white font-semibold">{weight.name}</h4>
                    <p className="text-neutral/60 text-xs mt-1">{weight.usage}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-neutral/70 text-sm font-mono">{weight.weight}</div>
                    <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">
                      {weight.class}
                    </code>
                  </div>
                </div>
                <p className={`${weight.class} text-white text-xl`}>
                  The quick brown fox jumps
                </p>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </motion.div>

      {/* Text Colors */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard padding="lg" variant="surface">
          <h3 className="text-xl font-bold text-white mb-6">Text Colors & Opacity</h3>
          
          <div className="space-y-4">
            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-white text-lg font-semibold">Primary Text</span>
                <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">text-white</code>
              </div>
              <p className="text-white text-base">
                Used for main headings and primary content that requires the highest emphasis.
              </p>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral text-lg font-semibold">Secondary Text</span>
                <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">text-neutral</code>
              </div>
              <p className="text-neutral text-base">
                Used for body text and general content with good readability.
              </p>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral/80 text-lg font-semibold">Tertiary Text</span>
                <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">text-neutral/80</code>
              </div>
              <p className="text-neutral/80 text-base">
                Used for supporting text and less emphasized content.
              </p>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral/60 text-lg font-semibold">Muted Text</span>
                <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">text-neutral/60</code>
              </div>
              <p className="text-neutral/60 text-base">
                Used for placeholder text, disabled states, and minimal emphasis content.
              </p>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-neutral/40 text-lg font-semibold">Disabled Text</span>
                <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs">text-neutral/40</code>
              </div>
              <p className="text-neutral/40 text-base">
                Used for completely disabled or inactive content.
              </p>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Special Text Treatments */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <GlassCard padding="lg" variant="glass">
          <h3 className="text-xl font-bold text-white mb-6">Special Text Treatments</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 bg-surface/20 rounded-xl">
              <h4 className="text-white font-semibold mb-3">Text Transform</h4>
              <div className="space-y-3">
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    uppercase
                  </code>
                  <p className="text-neutral/80 uppercase">Uppercase text for labels</p>
                </div>
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    lowercase
                  </code>
                  <p className="text-neutral/80 lowercase">LOWERCASE TEXT STYLE</p>
                </div>
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    capitalize
                  </code>
                  <p className="text-neutral/80 capitalize">capitalize each word</p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <h4 className="text-white font-semibold mb-3">Text Decoration</h4>
              <div className="space-y-3">
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    underline
                  </code>
                  <p className="text-neutral/80 underline">Underlined text for links</p>
                </div>
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    line-through
                  </code>
                  <p className="text-neutral/80 line-through">Strike-through for deleted content</p>
                </div>
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    truncate
                  </code>
                  <p className="text-neutral/80 truncate max-w-[200px]">
                    This is a very long text that will be truncated with an ellipsis
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <h4 className="text-white font-semibold mb-3">Line Height</h4>
              <div className="space-y-3">
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    leading-tight
                  </code>
                  <p className="text-neutral/80 leading-tight text-sm">
                    Tight line height for compact text. Good for headings and UI labels.
                  </p>
                </div>
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    leading-relaxed
                  </code>
                  <p className="text-neutral/80 leading-relaxed text-sm">
                    Relaxed line height for improved readability in body text.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 bg-surface/20 rounded-xl">
              <h4 className="text-white font-semibold mb-3">Letter Spacing</h4>
              <div className="space-y-3">
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    tracking-tight
                  </code>
                  <p className="text-neutral/80 tracking-tight">Tight letter spacing</p>
                </div>
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    tracking-wide
                  </code>
                  <p className="text-neutral/80 tracking-wide">Wide letter spacing</p>
                </div>
                <div>
                  <code className="text-primary bg-primary/10 px-2 py-1 rounded text-xs mb-2 inline-block">
                    tracking-wider
                  </code>
                  <p className="text-neutral/80 tracking-wider uppercase text-sm">
                    Labels & Headers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Usage Guidelines */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-gradient-to-r from-primary/10 to-primary-hover/10 backdrop-blur-sm rounded-2xl p-6 border border-primary/20"
      >
        <h4 className="text-primary font-bold text-lg mb-4">Typography Best Practices</h4>
        <ul className="space-y-2 text-neutral/80 text-sm">
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Maintain a clear <strong>hierarchy</strong> using heading levels consistently</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>line-height of 1.5-1.75</strong> for optimal body text readability</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Limit line length to <strong>60-80 characters</strong> for comfortable reading</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>opacity for hierarchy</strong> rather than different colors</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Reserve <strong>font-weight bold</strong> for headings and strong emphasis</span>
          </li>
          <li className="flex items-start space-x-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
            <span>Use <strong>monospace fonts</strong> for code, technical data, and numeric values</span>
          </li>
        </ul>
      </motion.div>
    </div>
  );
};

export default TypographyPage;
