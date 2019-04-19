import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import pokemons from "./pokemons";
import List from "../src/common/List.component";

const headers = [
  { key: "image", label: "Image", type: "image" },
  { key: "id", label: "ID", type: "id" },
  { key: "name", label: "Name", type: "main" },
  { key: "types", label: "Types", type: "list" },
  { key: "abilities", label: "Abilities", type: "list" },
  { key: "height", label: "Height", type: "number" },
  { key: "weight", label: "Weight", type: "number" }
];

storiesOf("Legacy", module)
  .add("List - Table", () => (
    <div style={{ height: "600px" }}>
      <List title="datasets" headers={headers} collection={pokemons} />
    </div>
  ))
  .add("List - Large", () => (
    <div style={{ height: "600px" }}>
      <List
        title="datasets"
        headers={headers}
        collection={pokemons}
        displayMode="large"
      />
    </div>
  ))
  .add("Step 1", () => <div>TODO</div>);
