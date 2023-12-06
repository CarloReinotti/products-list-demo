import { Component } from '@angular/core';

interface LeafNode {
  from: string;
  to: string;
}

interface TreeNode {
  name: string;
  expanded: boolean;
  children?: TreeNode[];
  leafNodes?: LeafNode[];
}

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
})
export class WidgetComponent {
  tree: TreeNode[] = [
    {
      name: 'Root',
      expanded: true,
      children: [
        {
          name: 'Node 1',
          expanded: false,
          children: [
            {
              name: 'Leaf 1',
              expanded: false,
              children: [],
              leafNodes: [{ from: 'Source 1', to: 'Destination 1' }],
            },
            {
              name: 'Leaf 2',
              expanded: false,
              children: [],
              leafNodes: [{ from: 'Source 2', to: 'Destination 2' }],
            },
          ],
        },
        {
          name: 'Node 2',
          expanded: false,
          children: [
            {
              name: 'Leaf 3',
              expanded: false,
              children: [],
              leafNodes: [{ from: 'Source 3', to: 'Destination 3' }],
            },
            {
              name: 'Leaf 4',
              expanded: false,
              children: [],
              leafNodes: [{ from: 'Source 4', to: 'Destination 4' }],
            },
          ],
        },
      ],
    },
  ];
}
