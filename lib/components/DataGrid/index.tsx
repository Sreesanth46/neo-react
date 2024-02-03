export interface TColumn {
  key: string;
  header: string;
  format?: (cell: unknown) => string;
}

export interface IDataGrid {
  rows: object[];
  columns?: TColumn[];
  loading?: boolean;
  noDataMessage?: string;
}

export const DataGrid: React.FC<IDataGrid> = props => {
  const { rows, columns } = props;

  const headers = (): string[] =>
    !columns ? Object.keys(rows[0]) : columns.map(({ header }) => header);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const reduceObject = (obj: any, path: string[]) => {
    return path.reduce((prev, key) => {
      return prev?.[key];
    }, obj);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const cellValue = (row: any, column: TColumn): string => {
    const fieldValue = reduceObject(row, column.header.split('.'));

    return column.format ? column.format(fieldValue) : fieldValue;
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 capitalize bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            {headers().map(header => (
              <th scope="col" className="px-6 py-3">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              {columns
                ? columns.map(column => (
                    <td className="px-6 py-4">{cellValue(row, column)}</td>
                  ))
                : headers().map(key => (
                    <td className="px-6 py-4">
                      {reduceObject(row, key.split('.'))}
                    </td>
                  ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
