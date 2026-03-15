//.. тип готового запису, який вже зберігається у state / масиві.
//.. це структура даних у додатку.
export interface SugarRecord {
  id: string;
  date: string;
  time: string;
  value: number;
  note?: string;
}
