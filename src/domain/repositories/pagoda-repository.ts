import { Pagoda, PagodaFilterOptions } from '../entities/pagoda';

export interface PagodaRepository {
  getAllPagodas(): Promise<Pagoda[]>;
  getPagodaById(id: string): Promise<Pagoda | null>;
  searchPagodas(options: PagodaFilterOptions): Promise<Pagoda[]>;
  getProvinces(): Promise<string[]>;
}
