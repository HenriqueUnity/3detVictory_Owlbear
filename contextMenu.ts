import OBR from "@owlbear-rodeo/sdk";

const ID = "com.victory.initiative-tracker";

export function setupContextMenu() {
  OBR.contextMenu.create({
    id: `${ID}/context-menu`,
    icons: [
      {
        icon: "/add.svg",
        label: "add label1",
        filter: {
          every: [
            { key: "layer", value: "CHARACTER" },
            { key: ["metadata", `${ID}/metadata`], value: undefined },
          ],
        },
      },
      {
        icon: "/remove.svg",
        label: "Remove label",
        filter: {
          every: [{ key: "layer", value: "CHARACTER" }],
        },
      },
    ],
    onClick(context) {
      const addToInitiative = context.items.every(
        (item) => item.metadata[`${ID}/metadata`] === undefined
      );
      if (addToInitiative) {
        const initiative = window.prompt("Enter the initiative value");
        OBR.scene.items.updateItems(context.items, (items) => {
          for (let item of items) {
            item.metadata[`${ID}/metadata`] = {
              initiative,
            };
          }
        });
      } else {
        OBR.scene.items.updateItems(context.items, (items) => {
          for (let item of items) {
            delete item.metadata[`${ID}/metadata`];
          }
        });
      }
    },
  });
}
