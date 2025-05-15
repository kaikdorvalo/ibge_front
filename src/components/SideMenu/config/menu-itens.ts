import RankingIcon from '../../../assets/icons/ranking.svg';
import LocationIcon from '../../../assets/icons/location.svg';
import CompareIcon from '../../../assets/icons/compare.svg';
import type { MenuRoute } from '../types/MenuRoute';

export const menuItens: MenuRoute[] = [
    { label: 'Ranking', path: '/ranking', icon: RankingIcon },
    { label: 'Ranking por localidade', path: '/ranking_location', icon: LocationIcon },
    { label: 'Comparação de nomes', path: '/name_comparison', icon: CompareIcon },
]