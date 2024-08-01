import Image from 'next/image';
import { IconCheck } from '@tabler/icons-react';

import { ContentProps } from '~/shared/types';
import Headline from '../common/Headline';
import WidgetWrapper from '../common/WidgetWrapper';
import ItemGrid from '../common/ItemGrid';

const Content2 = ({
  header,
  content,
  items,
  isAfterContent,
  id,
  hasBackground = true,
}: ContentProps) => (
  <WidgetWrapper
    id={id ? id : ''}
    hasBackground={hasBackground}
    containerClass={`${isAfterContent ? 'py-0 md:py-0 lg:py-0 pb-12 md:pb-16 lg:pb-20' : ''} `}
  >
    {header && <Headline header={header} titleClass="text-3xl sm:text-5xl" />}
    <div className="mx-auto max-w-7xl">
      <div className={` md:gap-16`}>
        <div className="self-center md:basis-1/2">
          {content &&
            <div className="mb-8 lg:mb-12 text-3xl text-gray-600 dark:text-slate-400 text-center">
              <h2>{content}</h2>
            </div>
          }
          <ItemGrid
            items={items}
            columns={2}
            containerClass="gap-4 md:gap-y-6 lg:grid-flow-row max-w-full"
            panelClass="flex max-w-full"
            titleClass="text-lg font-medium leading-6 text-gray-900 dark:text-white mt-1 mb-2"
            descriptionClass="mt-1 text-gray-600 dark:text-slate-400"
          />
        </div>
      </div>
    </div>
  </WidgetWrapper>
);

export default Content2;
