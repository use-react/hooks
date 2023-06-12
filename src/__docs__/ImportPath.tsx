import { DocsContext, Source } from '@storybook/addon-docs';
import type { FC } from 'react';
import React, { useContext } from 'react';

export interface ImportPathProps {
  root?: boolean;
  direct?: boolean;
}

export const ImportPath: FC<ImportPathProps> = ({ root = true, direct = true }) => {
  const context = useContext(DocsContext);
  // eslint-disable-next-line react/destructuring-assignment
  const componentName = context.title?.split('/')[1] || 'UnknownComponent';

  const imports: string[] = [];

  if (root) {
    imports.push(`// root import\nimport { ${componentName} } from '@react-hookz/web';`);
  }

  if (direct) {
    imports.push(
      `// direct import\nimport { ${componentName} } from '@react-hookz/web/esm/${componentName}';`
    );
  }

  return <Source language="js" code={imports.join('\n')} />;
};
