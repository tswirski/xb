export interface ListItem {
  id: string;
  content: string;
  lastModified: number;
  modifiedBy: string;
  version: number;
}

export interface CollaborativeListProps {
  items: ListItem[];
  onItemUpdate: (item: ListItem) => void;
  onItemDelete: (id: string) => void;
  currentUser: string;
}

export interface WebSocketMessage {
  type: 'update' | 'delete' | 'sync';
  payload: {
    item?: ListItem;
    itemId?: string;
    userId: string;
    timestamp: number;
  };
}

export interface SyncState {
  connected: boolean;
  lastSyncTimestamp: number;
  pendingUpdates: Map<string, ListItem>;
  conflictResolution: {
    pending: boolean;
    itemId?: string;
    localVersion?: ListItem;
    remoteVersion?: ListItem;
  };
}
