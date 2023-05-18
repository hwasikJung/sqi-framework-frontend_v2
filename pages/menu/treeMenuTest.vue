<template>
  <div>
    <vjstree
      ref="tree"
      :data="treeData"
      :item-events="itemEvents"
      show-checkbox
      multiple
      allow-batch
      whole-row
      draggable
      @item-click="itemClick"
      @item-drag-start="itemDragStart"
      @item-drag-end="itemDragEnd"
      @item-drop-before="itemDropBefore"
      @item-drop="itemDrop"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      itemEvents: {
        // mouseover() {
        //   console.log('mouseover');
        // },
        // contextmenu() {
        //   console.log(arguments[2]);
        //   arguments[2].preventDefault();
        //   console.log('contextmenu');
        // },
      },
      treeData: [],
      /* treeData: [
        {
          text: '댑스1-1',
          opened: true,
          children: [
            {
              text: '댑스2-1',
              selected: false,
            },
            {
              text: '댑스2-2',
              selected: false,
            },
            {
              text: '댑스2-3',
              selected: false,
            },
            {
              text: '댑스2-4',
              selected: false,
            },
          ],
        },
        {
          text: '댑스1-2',
          opened: false,
          children: [
            {
              text: '댑스2-1',
              selected: false,
            },
            {
              text: '댑스2-2',
              selected: false,
            },
            {
              text: '댑스2-3',
              selected: false,
            },
            {
              text: '댑스2-4',
              selected: false,
            },
          ],
        },
        {
          text: '댑스 1-3',
          opened: false,
          children: [
            {
              text: '댑스2-1',
              selected: false,
            },
            {
              text: '댑스2-2',
              selected: false,
            },
            {
              text: '댑스2-3',
              selected: false,
            },
            {
              text: '댑스2-4',
              selected: false,
            },
          ],
        },
      ], */
    };
  },
  async fetch() {
    const resData = await this.$store.dispatch('layouts/loadNavMenu');
    this.treeData = resData.filter((c) => c.mnuLvl === 1).map((v) => ({
      text: v.mnuNm,
      opened: false,
      children: resData.filter((z) => z.mnuLvl === 2 && v.mnuId === z.uppMnuId).map((x) => ({
        text: x.mnuNm,
        selected: false,
      })),
    }));
  },

  methods: {
    itemClick(node) {
      this.editingNode = node;
      this.editingItem = node.model;
      console.log(`${node.model.text} clicked !`);
    },
    itemDragStart(node) {
      console.log(`${node.model.text} drag start !`);
    },
    itemDragEnd(node) {
      console.log(`${node.model.text} drag end !`);
    },
    itemDropBefore(node, item, draggedItem, e) {
      if (!draggedItem) {
        item.addChild({
          text: 'newNode',
          value: 'newNode',
        });
      }
    },
    itemDrop(node, item) {
      // const sortBy = function (attr, rev) {
      //   if (rev === undefined) {
      //     rev = 1;
      //   } else {
      //     rev = rev ? 1 : -1;
      //   }
      //   return function (a, b) {
      //     a = a[attr];
      //     b = b[attr];
      //     if (a < b) {
      //       return rev * -1;
      //     }
      //     if (a > b) {
      //       return rev * 1;
      //     }
      //     return 0;
      //   };
      // };
      // item.children.sort(sortBy('text', true));
      // console.log(`${node.model.text} drop !`);
    },
  },
};
</script>
