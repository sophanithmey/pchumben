import { Pagoda, PagodaFilterOptions } from '../../domain/entities/pagoda';
import { PagodaRepository } from '../../domain/repositories/pagoda-repository';
import { PAGODAS_DATA } from '../../data/pagodas';

export class LocalPagodaRepository implements PagodaRepository {
  async getAllPagodas(): Promise<Pagoda[]> {
    return [...PAGODAS_DATA];
  }

  async getPagodaById(id: string): Promise<Pagoda | null> {
    const pagoda = PAGODAS_DATA.find((p) => p.id === id);
    return pagoda ? { ...pagoda } : null;
  }

  async searchPagodas(options: PagodaFilterOptions): Promise<Pagoda[]> {
    let results = [...PAGODAS_DATA];

    if (options.province && options.province !== 'all') {
      results = results.filter(
        (p) =>
          p.province.toLowerCase() === options.province?.toLowerCase() ||
          p.khmerProvince === options.province,
      );
    }

    if (options.searchQuery && options.searchQuery.trim() !== '') {
      const q = options.searchQuery.toLowerCase().trim();
      results = results.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.khmerName.includes(q) ||
          (p.district && p.district.toLowerCase().includes(q)) ||
          (p.khmerDistrict && p.khmerDistrict.includes(q)) ||
          p.province.toLowerCase().includes(q) ||
          p.khmerProvince.includes(q),
      );
    }

    return results;
  }

  async getProvinces(): Promise<string[]> {
    const set = new Set<string>();
    PAGODAS_DATA.forEach((p) => set.add(p.province));
    return Array.from(set);
  }
}

export const localPagodaRepository = new LocalPagodaRepository();
