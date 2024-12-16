import { tokens } from "@/.storybook/theme";
import {
  DropdownMenuItemType,
  IDropdownOption,
  Dropdown as V8Dropdown,
  Icon as V8Icon,
} from "@fluentui/react";
import {
  makeStyles,
  Option,
  OptionGroup,
  Dropdown as V9Dropdown,
} from "@fluentui/react-components";
import { Meta } from "@storybook/react";
import { CompareGrid } from "./CompareGrid";

// Meta configuration
const meta: Meta = {
  title: "FluentUI",
  component: () => <div />, // Placeholder, not used directly
};
export default meta;

const useStyles = makeStyles({
  dropdown: {
    width: "220px",
  },
  dropdownGroupLabel: {
    color: tokens.colorBrandForeground1,
    fontSize: tokens.fontSizeBase300,
  },
});

//#region Stories
export const Dropdown = () => {
  const styles = useStyles();

  const sortOptionsV8: IDropdownOption[] = [
    {
      key: "PZN",
      text: "PZN",
      itemType: DropdownMenuItemType.Header,
    },
    {
      key: "PZN_ASC",
      text: "aufsteigend",
      data: {
        title: "PZN",
        sortrichtung: "ASC",
      },
    },
    {
      key: "PZN_DESC",
      text: "absteigend",
      data: {
        title: "PZN",
        sortrichtung: "DESC",
      },
    },
    {
      key: "PRODBEZ",
      text: "Produktbezeichnung",
      itemType: DropdownMenuItemType.Header,
    },
    {
      key: "PRODBEZ_ASC",
      text: "aufsteigend",
      data: {
        title: "Produktbezeichnung",
        sortrichtung: "ASC",
      },
    },
    {
      key: "PRODBEZ_DESC",
      text: "absteigend",
      data: {
        title: "Produktbezeichnung",
        sortrichtung: "DESC",
      },
    },
  ];

  const sortOptionsV9 = [
    {
      key: "PZN",
      text: "PZN",
      options: [
        {
          key: "PZN_ASC",
          text: "aufsteigend",
          direction: "ASC",
          groupTitle: "PZN",
        },
        {
          key: "PZN_DESC",
          text: "absteigend",
          direction: "DESC",
          groupTitle: "PZN",
        },
      ],
    },
    {
      key: "PRODBEZ",
      text: "Produktbezeichnung",
      options: [
        {
          key: "PRODBEZ_ASC",
          text: "aufsteigend",
          direction: "ASC",
          groupTitle: "Produktbezeichnung",
        },
        {
          key: "PRODBEZ_DESC",
          text: "absteigend",
          direction: "DESC",
          groupTitle: "Produktbezeichnung",
        },
      ],
    },
  ];

  return (
    <CompareGrid
      v8Component={
        <V8Dropdown
          style={{ width: 220 }}
          styles={{
            title: {
              fontWeight: "600",
            },
          }}
          placeholder={"Sortierung"}
          options={sortOptionsV8}
          onRenderTitle={(props) => {
            const option = props?.[0];

            return option ? (
              <div>
                {option.data?.sortrichtung && (
                  <V8Icon
                    style={{ marginRight: "8px" }}
                    iconName={
                      option.data?.sortrichtung === "ASC" ? "up" : "down"
                    }
                  />
                )}
                <span>{option.data?.title}</span>
              </div>
            ) : null;
          }}
        />
      }
      v9Component={
        <V9Dropdown
          className={styles.dropdown}
          placeholder="Sortierung"
          clearable
        >
          {sortOptionsV9.map((group) => (
            <OptionGroup
              key={group.key}
              label={{
                className: styles.dropdownGroupLabel,
                children: group.text,
              }}
            >
              {group.options.map((option) => (
                <Option
                  key={option.key}
                  text={`${option.direction === "ASC" ? "↑" : "↓"} ${
                    option.groupTitle
                  }`}
                >
                  {option.text}
                </Option>
              ))}
            </OptionGroup>
          ))}
        </V9Dropdown>
      }
    />
  );
};
//#endregion
