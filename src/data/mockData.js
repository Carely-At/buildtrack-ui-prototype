export const mockUsers = [
  {
    id: 'admin-1',
    name: 'Sophie Martin',
    email: 'admin@buildtrack.fr',
    role: 'admin',
    avatar: null,
    plan: 'enterprise',
    createdAt: '2024-01-15T10:00:00Z',
  },
  {
    id: 'owner-1',
    name: 'Pierre Dupont',
    email: 'owner@buildtrack.fr',
    role: 'owner',
    avatar: null,
    plan: 'pro',
    createdAt: '2024-02-10T08:30:00Z',
  },
  {
    id: 'owner-2',
    name: 'Marie Lambert',
    email: 'marie@buildtrack.fr',
    role: 'owner',
    avatar: null,
    plan: 'free',
    createdAt: '2024-03-05T14:20:00Z',
  },
  {
    id: 'user-1',
    name: 'Lucas Bernard',
    email: 'user@buildtrack.fr',
    role: 'user',
    avatar: null,
    plan: 'free',
    jobRole: 'technicien',
    createdAt: '2024-03-20T09:15:00Z',
  },
  {
    id: 'user-2',
    name: 'Camille Rousseau',
    email: 'camille@buildtrack.fr',
    role: 'user',
    avatar: null,
    plan: 'free',
    jobRole: 'superviseur',
    createdAt: '2024-04-01T11:45:00Z',
  },
  {
    id: 'user-3',
    name: 'Thomas Petit',
    email: 'thomas@buildtrack.fr',
    role: 'user',
    avatar: null,
    plan: 'free',
    jobRole: 'ouvrier',
    createdAt: '2024-04-10T07:30:00Z',
  },
  {
    id: 'user-4',
    name: 'Emma Leroy',
    email: 'emma@buildtrack.fr',
    role: 'user',
    avatar: null,
    plan: 'free',
    jobRole: 'technicien',
    createdAt: '2024-05-02T13:00:00Z',
  },
];

export const jobRoles = [
  { key: 'proprietaire', label: 'Propri\u00e9taire', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
  { key: 'technicien', label: 'Technicien', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  { key: 'superviseur', label: 'Superviseur', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300' },
  { key: 'ouvrier', label: 'Ouvrier', color: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' },
  { key: 'invite', label: 'Invit\u00e9', color: 'bg-surface-100 text-surface-600 dark:bg-surface-800 dark:text-surface-400' },
];

export const mockSites = [
  {
    id: 'site-1',
    name: 'R\u00e9sidence Les Jardins',
    location: '15 Rue de la Paix, 75002 Paris',
    status: 'en_cours',
    ownerId: 'owner-1',
    ownerName: 'Pierre Dupont',
    startDate: '2024-06-01',
    endDate: '2025-03-15',
    progress: 45,
    budget: 2500000,
    members: [
      { userId: 'owner-1', name: 'Pierre Dupont', jobRole: 'proprietaire', joinedAt: '2024-06-01' },
      { userId: 'user-1', name: 'Lucas Bernard', jobRole: 'technicien', joinedAt: '2024-06-05' },
      { userId: 'user-2', name: 'Camille Rousseau', jobRole: 'superviseur', joinedAt: '2024-06-05' },
      { userId: 'user-3', name: 'Thomas Petit', jobRole: 'ouvrier', joinedAt: '2024-06-10' },
    ],
    description: 'Construction d\'un ensemble r\u00e9sidentiel de 24 logements avec parking souterrain.',
  },
  {
    id: 'site-2',
    name: 'Centre Commercial Bellevue',
    location: '45 Avenue des Champs, 69003 Lyon',
    status: 'planifie',
    ownerId: 'owner-1',
    ownerName: 'Pierre Dupont',
    startDate: '2025-01-15',
    endDate: '2026-06-30',
    progress: 5,
    budget: 8500000,
    members: [
      { userId: 'owner-1', name: 'Pierre Dupont', jobRole: 'proprietaire', joinedAt: '2024-11-01' },
      { userId: 'user-4', name: 'Emma Leroy', jobRole: 'technicien', joinedAt: '2024-11-15' },
    ],
    description: 'R\u00e9novation compl\u00e8te d\'un centre commercial sur 3 niveaux.',
  },
  {
    id: 'site-3',
    name: 'Villa Horizon',
    location: '8 Chemin des Oliviers, 13008 Marseille',
    status: 'en_cours',
    ownerId: 'owner-2',
    ownerName: 'Marie Lambert',
    startDate: '2024-09-01',
    endDate: '2025-06-30',
    progress: 68,
    budget: 750000,
    members: [
      { userId: 'owner-2', name: 'Marie Lambert', jobRole: 'proprietaire', joinedAt: '2024-09-01' },
      { userId: 'user-1', name: 'Lucas Bernard', jobRole: 'technicien', joinedAt: '2024-09-10' },
      { userId: 'user-3', name: 'Thomas Petit', jobRole: 'ouvrier', joinedAt: '2024-09-15' },
    ],
    description: 'Construction d\'une villa contemporaine avec piscine et jardin paysager.',
  },
  {
    id: 'site-4',
    name: '\u00c9cole Primaire Jean Moulin',
    location: '22 Boulevard Victor Hugo, 33000 Bordeaux',
    status: 'termine',
    ownerId: 'owner-2',
    ownerName: 'Marie Lambert',
    startDate: '2024-01-10',
    endDate: '2024-08-30',
    progress: 100,
    budget: 3200000,
    members: [
      { userId: 'owner-2', name: 'Marie Lambert', jobRole: 'proprietaire', joinedAt: '2024-01-10' },
      { userId: 'user-2', name: 'Camille Rousseau', jobRole: 'superviseur', joinedAt: '2024-01-15' },
    ],
    description: 'R\u00e9habilitation compl\u00e8te d\'une \u00e9cole primaire, mise aux normes accessibilit\u00e9.',
  },
  {
    id: 'site-5',
    name: 'Immeuble Le Panorama',
    location: '5 Place Bellecour, 69002 Lyon',
    status: 'en_pause',
    ownerId: 'owner-1',
    ownerName: 'Pierre Dupont',
    startDate: '2024-04-01',
    endDate: '2025-12-31',
    progress: 22,
    budget: 4100000,
    members: [
      { userId: 'owner-1', name: 'Pierre Dupont', jobRole: 'proprietaire', joinedAt: '2024-04-01' },
      { userId: 'user-2', name: 'Camille Rousseau', jobRole: 'superviseur', joinedAt: '2024-04-10' },
      { userId: 'user-4', name: 'Emma Leroy', jobRole: 'technicien', joinedAt: '2024-04-15' },
      { userId: 'user-3', name: 'Thomas Petit', jobRole: 'ouvrier', joinedAt: '2024-04-20' },
    ],
    description: 'Construction d\'un immeuble de bureaux de 8 \u00e9tages avec terrasse panoramique.',
  },
];

export const siteStatuses = {
  planifie: { label: 'Planifi\u00e9', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  en_cours: { label: 'En cours', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' },
  en_pause: { label: 'En pause', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
  termine: { label: 'Termin\u00e9', color: 'bg-surface-100 text-surface-600 dark:bg-surface-800 dark:text-surface-400' },
};

export const mockTasks = [
  { id: 't1', siteId: 'site-1', title: 'Couler les fondations B\u00e2timent A', status: 'termine', priority: 'haute', assignedTo: 'user-3', assignedName: 'Thomas Petit', assignedRole: 'ouvrier', dueDate: '2024-07-15', description: 'Pr\u00e9paration et coulage des fondations pour le b\u00e2timent principal.' },
  { id: 't2', siteId: 'site-1', title: 'Installation \u00e9lectrique RDC', status: 'en_cours', priority: 'haute', assignedTo: 'user-1', assignedName: 'Lucas Bernard', assignedRole: 'technicien', dueDate: '2025-01-20', description: 'Tirage des c\u00e2bles et installation des bo\u00eetiers au rez-de-chauss\u00e9e.' },
  { id: 't3', siteId: 'site-1', title: 'V\u00e9rification conformit\u00e9 structure', status: 'a_faire', priority: 'moyenne', assignedTo: 'user-2', assignedName: 'Camille Rousseau', assignedRole: 'superviseur', dueDate: '2025-02-01', description: 'Audit complet de la structure portante.' },
  { id: 't4', siteId: 'site-1', title: 'Pose menuiseries ext\u00e9rieures', status: 'a_faire', priority: 'basse', assignedTo: 'user-3', assignedName: 'Thomas Petit', assignedRole: 'ouvrier', dueDate: '2025-02-28', description: 'Installation des fen\u00eatres et portes ext\u00e9rieures aluminium.' },
  { id: 't5', siteId: 'site-2', title: 'Diagnostic amiante', status: 'en_cours', priority: 'haute', assignedTo: 'user-4', assignedName: 'Emma Leroy', assignedRole: 'technicien', dueDate: '2025-01-30', description: 'R\u00e9alisation du diagnostic amiante avant travaux.' },
  { id: 't6', siteId: 'site-2', title: 'Plans \u00e9lectriques d\u00e9taill\u00e9s', status: 'a_faire', priority: 'moyenne', assignedTo: 'user-4', assignedName: 'Emma Leroy', assignedRole: 'technicien', dueDate: '2025-02-15', description: '\u00c9laboration des plans \u00e9lectriques pour les 3 niveaux.' },
  { id: 't7', siteId: 'site-3', title: 'Peinture int\u00e9rieure', status: 'en_cours', priority: 'moyenne', assignedTo: 'user-3', assignedName: 'Thomas Petit', assignedRole: 'ouvrier', dueDate: '2025-03-10', description: 'Application des enduits et peintures dans toutes les pi\u00e8ces.' },
  { id: 't8', siteId: 'site-3', title: 'Installation piscine', status: 'a_faire', priority: 'haute', assignedTo: 'user-1', assignedName: 'Lucas Bernard', assignedRole: 'technicien', dueDate: '2025-04-15', description: 'Terrassement, structure et installation de la piscine.' },
  { id: 't9', siteId: 'site-5', title: 'R\u00e9vision plans architecte', status: 'en_cours', priority: 'haute', assignedTo: 'user-4', assignedName: 'Emma Leroy', assignedRole: 'technicien', dueDate: '2025-01-31', description: 'V\u00e9rification et mise \u00e0 jour des plans avec l\'architecte.' },
  { id: 't10', siteId: 'site-5', title: 'Commande mat\u00e9riaux structure', status: 'a_faire', priority: 'moyenne', assignedTo: 'user-2', assignedName: 'Camille Rousseau', assignedRole: 'superviseur', dueDate: '2025-02-10', description: 'Commande de l\'acier et du b\u00e9ton pour la reprise des travaux.' },
];

export const taskStatuses = {
  a_faire: { label: '\u00c0 faire', color: 'bg-surface-100 text-surface-700 dark:bg-surface-800 dark:text-surface-300' },
  en_cours: { label: 'En cours', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' },
  termine: { label: 'Termin\u00e9', color: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300' },
};

export const taskPriorities = {
  basse: { label: 'Basse', color: 'bg-surface-100 text-surface-600 dark:bg-surface-800 dark:text-surface-400' },
  moyenne: { label: 'Moyenne', color: 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300' },
  haute: { label: 'Haute', color: 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300' },
};

export const mockMessages = [
  {
    id: 'msg-1', siteId: 'site-1', senderId: 'owner-1', senderName: 'Pierre Dupont', senderRole: 'proprietaire',
    type: 'text', content: 'Bonjour \u00e0 tous, bienvenue sur le chantier R\u00e9sidence Les Jardins. N\'h\u00e9sitez pas \u00e0 poser vos questions ici.',
    timestamp: '2024-06-01T08:00:00Z',
  },
  {
    id: 'msg-2', siteId: 'site-1', senderId: 'user-2', senderName: 'Camille Rousseau', senderRole: 'superviseur',
    type: 'text', content: 'Merci Pierre ! J\'ai v\u00e9rifi\u00e9 les plans ce matin, tout est conforme. On peut d\u00e9marrer les fondations d\u00e8s lundi.',
    timestamp: '2024-06-01T09:30:00Z',
  },
  {
    id: 'msg-3', siteId: 'site-1', senderId: 'user-1', senderName: 'Lucas Bernard', senderRole: 'technicien',
    type: 'text', content: 'Parfait. J\'ai re\u00e7u les c\u00e2bles pour l\'\u00e9lectricit\u00e9, stock\u00e9s dans le container 2.',
    timestamp: '2024-06-02T14:15:00Z',
  },
  {
    id: 'msg-4', siteId: 'site-1', senderId: 'user-3', senderName: 'Thomas Petit', senderRole: 'ouvrier',
    type: 'text', content: 'Les fondations du B\u00e2timent A sont termin\u00e9es. Photos envoy\u00e9es.',
    timestamp: '2024-07-15T16:00:00Z',
  },
  {
    id: 'msg-5', siteId: 'site-1', senderId: 'user-3', senderName: 'Thomas Petit', senderRole: 'ouvrier',
    type: 'document', content: 'rapport_fondations_batA.pdf',
    timestamp: '2024-07-15T16:05:00Z',
  },
  {
    id: 'msg-6', siteId: 'site-1', senderId: 'owner-1', senderName: 'Pierre Dupont', senderRole: 'proprietaire',
    type: 'audio', content: 'Message vocal - 0:42',
    timestamp: '2024-07-16T08:20:00Z',
  },
  {
    id: 'msg-7', siteId: 'site-1', senderId: 'user-2', senderName: 'Camille Rousseau', senderRole: 'superviseur',
    type: 'video', content: 'inspection_chantier_juillet.mp4',
    timestamp: '2024-07-20T11:30:00Z',
  },
  {
    id: 'msg-8', siteId: 'site-3', senderId: 'owner-2', senderName: 'Marie Lambert', senderRole: 'proprietaire',
    type: 'text', content: 'Le terrassement pour la piscine est pr\u00e9vu pour la semaine prochaine.',
    timestamp: '2025-01-10T09:00:00Z',
  },
  {
    id: 'msg-9', siteId: 'site-3', senderId: 'user-1', senderName: 'Lucas Bernard', senderRole: 'technicien',
    type: 'text', content: 'Compris. Je pr\u00e9pare les raccordements \u00e9lectriques pour le local technique.',
    timestamp: '2025-01-10T09:45:00Z',
  },
  {
    id: 'msg-10', siteId: 'site-5', senderId: 'owner-1', senderName: 'Pierre Dupont', senderRole: 'proprietaire',
    type: 'text', content: 'Le chantier est en pause en attendant les nouvelles autorisations. Je vous tiens inform\u00e9s.',
    timestamp: '2025-01-05T10:00:00Z',
  },
  {
    id: 'msg-11', siteId: 'site-2', senderId: 'owner-1', senderName: 'Pierre Dupont', senderRole: 'proprietaire',
    type: 'text', content: 'Emma, o\u00f9 en est le diagnostic amiante ?',
    timestamp: '2025-01-20T14:00:00Z',
  },
  {
    id: 'msg-12', siteId: 'site-2', senderId: 'user-4', senderName: 'Emma Leroy', senderRole: 'technicien',
    type: 'text', content: 'Le rapport sera finalis\u00e9 d\'ici vendredi. Pas de mauvaise surprise pour l\'instant.',
    timestamp: '2025-01-20T14:30:00Z',
  },
];

export const mockPhases = [
  { id: 'ph1', siteId: 'site-1', name: 'Implantation', startDate: '2024-06-01', endDate: '2024-07-31', color: '#3b82f6' },
  { id: 'ph2', siteId: 'site-1', name: 'Gros \u0152uvre', startDate: '2024-08-01', endDate: '2024-12-31', color: '#f59e0b' },
  { id: 'ph3', siteId: 'site-1', name: 'Second \u0152uvre', startDate: '2025-01-01', endDate: '2025-02-15', color: '#8b5cf6' },
  { id: 'ph4', siteId: 'site-1', name: 'Finitions', startDate: '2025-02-16', endDate: '2025-03-15', color: '#10b981' },
  { id: 'ph5', siteId: 'site-3', name: 'Implantation', startDate: '2024-09-01', endDate: '2024-10-15', color: '#3b82f6' },
  { id: 'ph6', siteId: 'site-3', name: 'Ex\u00e9cution', startDate: '2024-10-16', endDate: '2025-04-30', color: '#f59e0b' },
  { id: 'ph7', siteId: 'site-3', name: 'Finition', startDate: '2025-05-01', endDate: '2025-06-30', color: '#10b981' },
];

export const mockStats = {
  totalUsers: 7,
  totalOwners: 2,
  totalSites: 5,
  activeSites: 2,
  completedSites: 1,
  totalTasks: 10,
  completedTasks: 1,
  revenue: 125000,
  monthlyGrowth: [
    { month: 'Jan', users: 3, sites: 2 },
    { month: 'F\u00e9v', users: 4, sites: 2 },
    { month: 'Mar', users: 5, sites: 3 },
    { month: 'Avr', users: 5, sites: 4 },
    { month: 'Mai', users: 6, sites: 4 },
    { month: 'Jun', users: 7, sites: 5 },
  ],
  planDistribution: { free: 4, pro: 2, enterprise: 1 },
  tasksByStatus: { a_faire: 5, en_cours: 4, termine: 1 },
};

export const plans = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    period: '/mois',
    description: 'Pour d\u00e9marrer et d\u00e9couvrir BuildTrack',
    features: [
      '1 chantier actif',
      'Jusqu\'\u00e0 3 membres',
      'Messagerie basique',
      'Gestion des t\u00e2ches',
      'Planning simple',
    ],
    limitations: [
      'Pas d\'export PDF',
      'Pas de statistiques avanc\u00e9es',
      'Support communaut\u00e9 uniquement',
    ],
    cta: 'Commencer gratuitement',
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 29,
    period: '/mois',
    description: 'Pour les professionnels du b\u00e2timent',
    features: [
      'Chantiers illimit\u00e9s',
      'Membres illimit\u00e9s',
      'Messagerie compl\u00e8te (audio, vid\u00e9o, documents)',
      'Planning avanc\u00e9 avec phases',
      'Export PDF des rapports',
      'Statistiques d\u00e9taill\u00e9es',
      'Support prioritaire',
    ],
    limitations: [],
    cta: 'Passer \u00e0 Pro',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 99,
    period: '/mois',
    description: 'Pour les grandes entreprises',
    features: [
      'Tout le plan Pro',
      'API d\u00e9di\u00e9e',
      'SSO / SAML',
      'Gestion multi-\u00e9quipes',
      'Audit et conformit\u00e9',
      'Account manager d\u00e9di\u00e9',
      'SLA garantie 99.9%',
      'Formation personnalis\u00e9e',
    ],
    limitations: [],
    cta: 'Contacter les ventes',
    popular: false,
  },
];

export function getInitials(name) {
  if (!name) return '?';
  return name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
}

export function formatDate(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
}

export function formatTime(dateStr) {
  if (!dateStr) return '';
  const d = new Date(dateStr);
  return d.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
}

export function formatCurrency(amount) {
  return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 }).format(amount);
}

export function getJobRoleInfo(role) {
  return jobRoles.find(r => r.key === role) || { key: role, label: role, color: 'bg-surface-100 text-surface-600' };
}