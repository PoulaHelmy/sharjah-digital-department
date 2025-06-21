export interface DataResponse {
  services: GenericResponse & { categories: Category[]; };
  scope: GenericResponse;
  downloadCenter: { files: FileData[]; };
}

export interface GenericResponse {
  titleKey: string;
  items: Item[];
}

export interface Category {
  id: number;
  value: string;
}

export interface Item {
  icon: string;
  titleKey: string;
  descriptionKey: string;
  categoryId?: number;
}

export interface FileData {
  id: string;
  titleKey: string;
  descriptionKey: string;
  date: string;
}
