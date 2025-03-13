
import "./TagPicker.module.css";

import * as React from "react";
import { useState } from "react";

import {
  Avatar,
  Badge,
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  DialogTrigger,
  Field,
  FluentProvider,
  Input,
  InteractionTag,
  InteractionTagPrimary,
  makeStyles,
  shorthands,
  Tag,
  TagPicker,
  TagPickerButton,
  TagPickerControl,
  TagPickerGroup,
  TagPickerInput,
  TagPickerList,
  TagPickerOption,
  teamsDarkTheme,
  teamsLightTheme,
} from "@fluentui/react-components";
import type { BadgeProps, TagPickerProps } from "@fluentui/react-components";
import { People20Regular } from "@fluentui/react-icons";

/** Primary UI component for user interaction */
export interface BadgePropsText extends BadgeProps {
  text?: string;
}
const options  = [
  "John Doe",
  "Jane Doe",
  "Max Mustermann",
  "Erika Mustermann",
  "Pierre Dupont",
  "Amelie Dupont",
  "Mario Rossi",
  "Maria Rossi",
];

export const TagPickerComponent = ({ ...props }: BadgePropsText) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const onOptionSelect: TagPickerProps["onOptionSelect"] = (e, data) => {
    if (data.value === "no-options") {
      return;
    }
    setSelectedOptions(data.selectedOptions);
  };
  const tagPickerOptions = options.filter(
    (option) => !selectedOptions.includes(option)
  );

  return (
    <FluentProvider theme={teamsLightTheme}>
      <Field label="Select Employees" style={{ maxWidth: 400 }}>
      <TagPicker
        onOptionSelect={onOptionSelect}
        selectedOptions={selectedOptions}
        size="large"
      >
        <TagPickerControl expandIcon={""}>
          <TagPickerGroup aria-label="Selected Employees">
            {selectedOptions.map((option) => (
              <Tag
                key={option}
                shape="circular"
                media={<Avatar aria-hidden name={option} color="colorful" />}
                value={option}
                dismissible
                dismissIcon={{ "aria-label" : "remove"}}
              >
                {option}
              </Tag>
            ))}
          </TagPickerGroup>
          <TagPickerInput aria-label="Select Employees" />
        </TagPickerControl>
        <TagPickerList>
          {tagPickerOptions.length > 0 ? (
            tagPickerOptions.map((option) => (
              <TagPickerOption
                media={
                  <Avatar
                    shape="square"
                    aria-hidden
                    name={option}
                    color="colorful"
                  />
                }
                value={option}
                key={option}
              >
                {option}
              </TagPickerOption>
            ))
          ) : (
            <TagPickerOption value="no-options">
              No options available
            </TagPickerOption>
          )}
        </TagPickerList>
      </TagPicker>
    </Field>
    </FluentProvider>
  );
};


