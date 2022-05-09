export interface TableProps {
  heading: string;
}

const DataTable = (props: TableProps) => {
  const { heading } = props;

  return (
    <div>
      <h1>{heading}</h1>
    </div>
  );
};

export default DataTable;
