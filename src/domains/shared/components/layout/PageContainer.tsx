import React from 'react';
import clsx from 'clsx';
import { layout, spacing, transitions } from '../../design-system';

type Padding = 'none' | 'standard' | 'comfortable';

type MaxWidth = 'default' | 'wide' | 'full';
type ElementTag = 'section' | 'div' | 'main' | 'article';

const widthClass: Record<MaxWidth, string> = {
  default: layout.contentWidth,
  wide: 'max-w-[1600px] mx-auto',
  full: 'w-full'
};

const paddingClass: Record<Padding, string> = {
  none: 'px-0',
  standard: layout.pagePadding,
  comfortable: 'px-6 sm:px-8 lg:px-12 xl:px-16 py-8 lg:py-12'
};

export interface PageContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  /**
   * Controls the maximum width of the content area. Defaults to the standard dashboard width.
   */
  maxWidth?: MaxWidth;
  /**
   * Applies consistent horizontal and vertical padding aligned with the dashboard gutters.
   */
  padding?: Padding;
  /**
   * Optional surface background treatment for custom pages.
   */
  surfaceClassName?: string;
  as?: ElementTag;
}

const PageContainer: React.FC<PageContainerProps> = ({
  children,
  maxWidth = 'default',
  padding = 'standard',
  surfaceClassName,
  className,
  as = 'section',
  ...rest
}) => {
  const Tag = as;
  return (
    <Tag
      className={clsx(
        'relative w-full',
        paddingClass[padding],
        surfaceClassName,
        transitions.default
      )}
      {...rest}
    >
      <div
        className={clsx(
          'mx-auto flex w-full flex-col',
          widthClass[maxWidth],
          spacing.lg,
          className
        )}
      >
        {children}
      </div>
    </Tag>
  );
};

export default PageContainer;
