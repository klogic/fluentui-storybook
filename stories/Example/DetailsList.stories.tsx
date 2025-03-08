import {
  DetailsListLayoutMode,
  IColumn,
  SelectionMode,
  ShimmeredDetailsList,
} from "@fluentui/react";
import {
  createTableColumn,
  DataGrid,
  DataGridBody,
  DataGridCell,
  DataGridHeader,
  DataGridHeaderCell,
  DataGridRow,
  makeStyles,
  Skeleton,
  SkeletonItem,
  TableCellLayout,
  TableColumnDefinition,
} from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { format } from "date-fns/format";
import { de } from "date-fns/locale";
import { FC, useMemo } from "react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "Example/FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

type ListItem = {
  name: string;
  email: string;
  zuletztAngemeldet: Date | null;
};

const formatOptionalDate = (date?: Date) =>
  !date ? "" : format(date, "P", { locale: de });

const useStyles = makeStyles({
  shimmerRow: { display: "flex" },
  shimmerItem: { margin: "1.125rem 0.5rem" },
  tableBody: {
    fontSize: "x-small",
  },
});

const DataGridSkeleton: FC<{ rows?: number }> = ({ rows = 10 }) => {
  const styles = useStyles();

  const rowItems = useMemo(() => new Array(rows).fill(0), [rows]);

  return (
    <Skeleton>
      {rowItems.map((_, index) => (
        <div key={index} className={styles.shimmerRow}>
          <SkeletonItem size={8} className={styles.shimmerItem} />
          <SkeletonItem size={8} className={styles.shimmerItem} />
          <SkeletonItem size={8} className={styles.shimmerItem} />
        </div>
      ))}
    </Skeleton>
  );
};

//#region Stories
export const DetailsListLoading = () => {
  const v8Columns: IColumn[] = [
    {
      key: "name",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 180,
    },
    {
      key: "email",
      name: "E-Mail-Adresse",
      fieldName: "email",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: "lastLogin",
      name: "Zuletzt angemeldet",
      fieldName: "zuletztAngemeldet",
      minWidth: 100,
      maxWidth: 170,
      onRender: (item?: ListItem, index?: number, column?: IColumn) => {
        const fieldName = column?.fieldName;

        if (!item || fieldName === undefined) {
          return null;
        }

        const value = item[fieldName as keyof ListItem];

        if (!value || typeof value === "string") {
          return null;
        }

        return formatOptionalDate(value);
      },
    },
  ];

  const v9Columns: TableColumnDefinition<ListItem>[] = [
    createTableColumn<ListItem>({
      columnId: "name",
      renderHeaderCell: () => "Name",
      renderCell: (item) => <TableCellLayout>{item.name}</TableCellLayout>,
    }),
    createTableColumn<ListItem>({
      columnId: "email",
      renderHeaderCell: () => "E-Mail-Adresse",
      renderCell: (item) => <TableCellLayout>{item.email}</TableCellLayout>,
    }),
    createTableColumn<ListItem>({
      columnId: "lastLogin",
      renderHeaderCell: () => "Zuletzt angemeldet",
      renderCell: (item) => (
        <TableCellLayout>
          {formatOptionalDate(item.zuletztAngemeldet ?? undefined)}
        </TableCellLayout>
      ),
    }),
  ];

  const loading = true;
  const items: ListItem[] = [];

  return (
    <CompareGrid
      v8Component={
        <ShimmeredDetailsList
          enableShimmer={loading}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.justified}
          items={items}
          columns={v8Columns}
        />
      }
      v9Component={
        <DataGrid items={items} columns={v9Columns}>
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          {loading ? (
            <DataGridSkeleton />
          ) : (
            <DataGridBody<ListItem>>
              {({ item, rowId }) => (
                <DataGridRow<ListItem> key={rowId}>
                  {({ renderCell }) => (
                    <DataGridCell>{renderCell(item)}</DataGridCell>
                  )}
                </DataGridRow>
              )}
            </DataGridBody>
          )}
        </DataGrid>
      }
    />
  );
};
export const DetailsList = () => {
  const styles = useStyles();

  const v8Columns: IColumn[] = [
    {
      key: "name",
      name: "Name",
      fieldName: "name",
      minWidth: 100,
      maxWidth: 180,
    },
    {
      key: "email",
      name: "E-Mail-Adresse",
      fieldName: "email",
      minWidth: 100,
      maxWidth: 200,
    },
    {
      key: "lastLogin",
      name: "Zuletzt angemeldet",
      fieldName: "zuletztAngemeldet",
      minWidth: 100,
      maxWidth: 170,
      onRender: (item?: ListItem, index?: number, column?: IColumn) => {
        const fieldName = column?.fieldName;

        if (!item || fieldName === undefined) {
          return null;
        }

        const value = item[fieldName as keyof ListItem];

        if (!value || typeof value === "string") {
          return null;
        }

        return formatOptionalDate(value);
      },
    },
  ];

  const v9Columns: TableColumnDefinition<ListItem>[] = [
    createTableColumn<ListItem>({
      columnId: "name",
      renderHeaderCell: () => (
        <TableCellLayout truncate>{"Name"}</TableCellLayout>
      ),
      renderCell: (item) => (
        <TableCellLayout truncate>{item.name}</TableCellLayout>
      ),
    }),
    createTableColumn<ListItem>({
      columnId: "email",
      renderHeaderCell: () => (
        <TableCellLayout truncate>{"E-Mail-Adresse"}</TableCellLayout>
      ),
      renderCell: (item) => (
        <TableCellLayout truncate>{item.email}</TableCellLayout>
      ),
    }),
    createTableColumn<ListItem>({
      columnId: "lastLogin",
      renderHeaderCell: () => (
        <TableCellLayout truncate>{"Zuletzt angemeldet"}</TableCellLayout>
      ),
      renderCell: (item) => (
        <TableCellLayout truncate>
          {formatOptionalDate(item.zuletztAngemeldet ?? undefined)}
        </TableCellLayout>
      ),
    }),
  ];

  const loading = false;
  const items: ListItem[] = [
    {
      name: "John Smith",
      email: "john.smith@example.com",
      zuletztAngemeldet: new Date(2024, 11, 19),
    },
    {
      name: "Jane Doe",
      email: "jane.doe@example.com",
      zuletztAngemeldet: new Date(2024, 10, 15),
    },
    {
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      zuletztAngemeldet: new Date(2024, 9, 25),
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
      zuletztAngemeldet: new Date(2024, 8, 10),
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
      zuletztAngemeldet: new Date(2024, 7, 5),
    },
    {
      name: "Edward King",
      email: "edward.king@example.com",
      zuletztAngemeldet: new Date(2024, 5, 12),
    },
    {
      name: "Fiona Hill",
      email: "fiona.hill@example.com",
      zuletztAngemeldet: new Date(2024, 4, 30),
    },
    {
      name: "George Carter",
      email: "george.carter@example.com",
      zuletztAngemeldet: new Date(2024, 3, 18),
    },
    {
      name: "Hannah White",
      email: "hannah.white@example.com",
      zuletztAngemeldet: new Date(2024, 2, 1),
    },
  ];

  return (
    <CompareGrid
      v8Component={
        <ShimmeredDetailsList
          enableShimmer={loading}
          selectionMode={SelectionMode.none}
          layoutMode={DetailsListLayoutMode.justified}
          items={items}
          columns={v8Columns}
        />
      }
      v9Component={
        <DataGrid items={items} columns={v9Columns}>
          <DataGridHeader>
            <DataGridRow>
              {({ renderHeaderCell }) => (
                <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
              )}
            </DataGridRow>
          </DataGridHeader>
          {loading ? (
            <DataGridSkeleton />
          ) : (
            <DataGridBody<ListItem>>
              {({ item, rowId }) => (
                <DataGridRow<ListItem> key={rowId}>
                  {({ renderCell }) => (
                    <DataGridCell className={styles.tableBody}>
                      {renderCell(item)}
                    </DataGridCell>
                  )}
                </DataGridRow>
              )}
            </DataGridBody>
          )}
        </DataGrid>
      }
    />
  );
};

//#endregion
