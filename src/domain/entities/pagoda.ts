export interface Pagoda {
  id: string;
  name: string;
  khmerName: string;
  province: string;
  khmerProvince: string;
  district?: string;
  khmerDistrict?: string;
  latitude: number;
  longitude: number;
  description?: string;
  khmerDescription?: string;
  highlightTag?: string;
}

export interface PagodaFilterOptions {
  province?: string;
  searchQuery?: string;
}
