export interface ActionCreateInput {
  user_id: number;
  location_x: number;
  location_y: number;
  score: number;
  label: string;
  capture_file: Express.Multer.File;
}

export interface ActionGetInput {
  user_id: number;
  action_id: number;
}

export interface ActionsGetInput {
  user_id: number;
  date_start?: Date;
  date_end?: Date;
  before_m?: number;
}
