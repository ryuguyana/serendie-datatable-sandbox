import { DataTable, IconButton, Tooltip } from "@serendie/ui";
import { SerendieSymbol } from "@serendie/symbols";

export type Employee = {
  id: number;
  name: string;
  department: string;
  position: string;
  salary: number;
};

const employees: Employee[] = [
  {
    id: 1,
    name: "田中太郎",
    department: "開発",
    position: "エンジニア",
    salary: 450000,
  },
  {
    id: 2,
    // コメントアウトで切り替える
    name: "佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子佐藤花子",
    // name: "",
    department: "営業",
    position: "マネージャー",
    salary: 520000,
  },
  {
    id: 3,
    name: "山田次郎",
    department: "開発",
    // コメントアウトで切り替える
    // position: "シニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニアシニアエンジニア",
    position: "",
    salary: 680000,
  },
  {
    id: 4,
    name: "鈴木美穂",
    department: "人事",
    position: "アシスタント",
    salary: 380000,
  },
];

export function BasicSample() {
  const columnHelper = DataTable.createColumnHelper<Employee>();

  const columns = [
    columnHelper.accessor("id", {
      header: "ID",
      enableSorting: true,
    }),
    columnHelper.accessor("name", {
      header: "氏名",
      enableSorting: true,
      maxSize: 200,
      cell: (info) => {
        const value = info.getValue();

        return (
          <Tooltip content={value}>
            <div
              style={{
                maxWidth: "200px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {value}
            </div>
          </Tooltip>
        );
      }
    }),
    columnHelper.accessor("position", {
      header: "役職",
      enableSorting: true,
      cell: (info) => {
        const value = info.getValue();

        return (
          <Tooltip content={value}>
            <div
              style={{
                maxWidth: "320px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {value}
            </div>
          </Tooltip>
        );
      }
    }),
    columnHelper.display({
      header: " ",
      cell: () => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "100%",
            }}
          >
            <IconButton
              shape="circle"
              icon={<SerendieSymbol
                name="more-vertical"
                variant="outlined"
              />}
              styleType="ghost" />
          </div>
        );
      },
    }),
  ];

  return <DataTable<Employee> enableRowSelection={false} data={employees} columns={columns} />;
}



export default function App() {
  return (
    <div>
      <BasicSample />
    </div>
  );
}