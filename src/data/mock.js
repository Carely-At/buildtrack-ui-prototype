// ============================================
// BuildTrack - Mock Data
// ============================================

export const ROLES = {
  ADMIN: 'admin',
  OWNER: 'proprietaire',
  USER: 'utilisateur',
  TECHNICIAN: 'technicien',
  SUPERVISOR: 'superviseur',
  WORKER: 'ouvrier',
  GUEST: 'invite',
};

export const ROLE_LABELS = {
  [ROLES.ADMIN]: 'Administrateur',
  [ROLES.OWNER]: 'Propriétaire',
  [ROLES.USER]: 'Utilisateur',
  [ROLES.TECHNICIAN]: 'Technicien',
  [ROLES.SUPERVISOR]: 'Superviseur',
  [ROLES.WORKER]: 'Ouvrier',
  [ROLES.GUEST]: 'Invité',
};

export const ROLE_COLORS = {
  [ROLES.ADMIN]: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  [ROLES.OWNER]: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
  [ROLES.USER]: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  [ROLES.TECHNICIAN]: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  [ROLES.SUPERVISOR]: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
  [ROLES.WORKER]: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  [ROLES.GUEST]: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
};

export const PROJECT_STATUS = {
  PLANNING: 'planification',
  IN_PROGRESS: 'en_cours',
  PAUSED: 'en_pause',
  COMPLETED: 'termine',
};

export const STATUS_LABELS = {
  [PROJECT_STATUS.PLANNING]: 'Planification',
  [PROJECT_STATUS.IN_PROGRESS]: 'En cours',
  [PROJECT_STATUS.PAUSED]: 'En pause',
  [PROJECT_STATUS.COMPLETED]: 'Terminé',
};

export const STATUS_COLORS = {
  [PROJECT_STATUS.PLANNING]: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  [PROJECT_STATUS.IN_PROGRESS]: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  [PROJECT_STATUS.PAUSED]: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300',
  [PROJECT_STATUS.COMPLETED]: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
};

export const TASK_STATUS = {
  TODO: 'a_faire',
  IN_PROGRESS: 'en_cours',
  DONE: 'termine',
};

export const TASK_PRIORITY = {
  LOW: 'basse',
  MEDIUM: 'moyenne',
  HIGH: 'haute',
  URGENT: 'urgente',
};

export const PRIORITY_COLORS = {
  [TASK_PRIORITY.LOW]: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400',
  [TASK_PRIORITY.MEDIUM]: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  [TASK_PRIORITY.HIGH]: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  [TASK_PRIORITY.URGENT]: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300',
};

// --- Users ---
export const mockUsers = [
  { id: '1', name: 'Admin BuildTrack', email: 'admin@buildtrack.fr', role: ROLES.ADMIN, avatar: null, joinedAt: '2024-01-15' },
  { id: '2', name: 'Marie Dupont', email: 'marie@dupont.fr', role: ROLES.OWNER, avatar: null, joinedAt: '2024-02-10' },
  { id: '3', name: 'Pierre Martin', email: 'pierre@martin.fr', role: ROLES.OWNER, avatar: null, joinedAt: '2024-03-05' },
  { id: '4', name: 'Lucas Bernard', email: 'lucas@bernard.fr', role: ROLES.TECHNICIAN, avatar: null, joinedAt: '2024-03-20' },
  { id: '5', name: 'Sophie Laurent', email: 'sophie@laurent.fr', role: ROLES.SUPERVISOR, avatar: null, joinedAt: '2024-04-01' },
  { id: '6', name: 'Thomas Petit', email: 'thomas@petit.fr', role: ROLES.WORKER, avatar: null, joinedAt: '2024-04-15' },
  { id: '7', name: 'Julie Moreau', email: 'julie@moreau.fr', role: ROLES.WORKER, avatar: null, joinedAt: '2024-05-01' },
  { id: '8', name: 'Antoine Leroy', email: 'antoine@leroy.fr', role: ROLES.TECHNICIAN, avatar: null, joinedAt: '2024-05-10' },
  { id: '9', name: 'Camille Roux', email: 'camille@roux.fr', role: ROLES.GUEST, avatar: null, joinedAt: '2024-06-01' },
  { id: '10', name: 'Nicolas Fournier', email: 'nicolas@fournier.fr', role: ROLES.USER, avatar: null, joinedAt: '2024-06-15' },
];

// --- Projects (Chantiers) ---
export const mockProjects = [
  {
    id: 'p1',
    name: 'Résidence Les Oliviers',
    location: '12 Rue des Oliviers, Lyon 69003',
    status: PROJECT_STATUS.IN_PROGRESS,
    ownerId: '2',
    description: 'Construction d\'un immeuble résidentiel de 24 appartements avec parking souterrain.',
    startDate: '2024-03-01',
    endDate: '2025-06-30',
    budget: '2 450 000 €',
    members: [
      { userId: '2', role: ROLES.OWNER },
      { userId: '4', role: ROLES.TECHNICIAN },
      { userId: '5', role: ROLES.SUPERVISOR },
      { userId: '6', role: ROLES.WORKER },
      { userId: '7', role: ROLES.WORKER },
    ],
  },
  {
    id: 'p2',
    name: 'Bureau Modern Office',
    location: '45 Avenue de la République, Paris 75011',
    status: PROJECT_STATUS.PLANNING,
    ownerId: '2',
    description: 'Rénovation complète d\'un espace de bureaux de 800m² en open space moderne.',
    startDate: '2024-07-01',
    endDate: '2024-12-31',
    budget: '890 000 €',
    members: [
      { userId: '2', role: ROLES.OWNER },
      { userId: '8', role: ROLES.TECHNICIAN },
      { userId: '9', role: ROLES.GUEST },
    ],
  },
  {
    id: 'p3',
    name: 'École Primaire Voltaire',
    location: '8 Place Voltaire, Marseille 13001',
    status: PROJECT_STATUS.IN_PROGRESS,
    ownerId: '3',
    description: 'Extension et mise aux normes d\'une école primaire. Ajout de 6 salles de classe.',
    startDate: '2024-05-15',
    endDate: '2025-03-30',
    budget: '1 750 000 €',
    members: [
      { userId: '3', role: ROLES.OWNER },
      { userId: '4', role: ROLES.TECHNICIAN },
      { userId: '5', role: ROLES.SUPERVISOR },
      { userId: '6', role: ROLES.WORKER },
      { userId: '10', role: ROLES.USER },
    ],
  },
  {
    id: 'p4',
    name: 'Villa Méditerranée',
    location: '23 Chemin des Pins, Nice 06000',
    status: PROJECT_STATUS.COMPLETED,
    ownerId: '3',
    description: 'Construction d\'une villa contemporaine de 250m² avec piscine et jardin paysager.',
    startDate: '2023-09-01',
    endDate: '2024-06-30',
    budget: '680 000 €',
    members: [
      { userId: '3', role: ROLES.OWNER },
      { userId: '8', role: ROLES.TECHNICIAN },
      { userId: '7', role: ROLES.WORKER },
    ],
  },
  {
    id: 'p5',
    name: 'Centre Commercial Étoile',
    location: '100 Boulevard Haussmann, Paris 75008',
    status: PROJECT_STATUS.PAUSED,
    ownerId: '2',
    description: 'Réhabilitation d\'un espace commercial de 3000m² en centre-ville.',
    startDate: '2024-01-15',
    endDate: '2025-09-30',
    budget: '4 200 000 €',
    members: [
      { userId: '2', role: ROLES.OWNER },
      { userId: '5', role: ROLES.SUPERVISOR },
      { userId: '6', role: ROLES.WORKER },
    ],
  },
];

// --- Tasks ---
export const mockTasks = [
  { id: 't1', projectId: 'p1', title: 'Fondations niveau -1', status: TASK_STATUS.DONE, priority: TASK_PRIORITY.HIGH, assignedTo: '6', dueDate: '2024-04-15', description: 'Coulage des fondations du niveau souterrain.' },
  { id: 't2', projectId: 'p1', title: 'Ferraillage RDC', status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.HIGH, assignedTo: '6', dueDate: '2024-07-20', description: 'Mise en place des armatures métalliques du rez-de-chaussée.' },
  { id: 't3', projectId: 'p1', title: 'Installation électrique étage 1', status: TASK_STATUS.TODO, priority: TASK_PRIORITY.MEDIUM, assignedTo: '4', dueDate: '2024-09-10', description: 'Câblage et installation des prises et interrupteurs.' },
  { id: 't4', projectId: 'p1', title: 'Plomberie générale', status: TASK_STATUS.TODO, priority: TASK_PRIORITY.MEDIUM, assignedTo: '4', dueDate: '2024-10-01', description: 'Installation du réseau d\'eau et d\'évacuation.' },
  { id: 't5', projectId: 'p1', title: 'Peinture extérieure', status: TASK_STATUS.TODO, priority: TASK_PRIORITY.LOW, assignedTo: '7', dueDate: '2025-03-15', description: 'Application de la peinture de façade.' },
  { id: 't6', projectId: 'p2', title: 'Plans architecturaux', status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.URGENT, assignedTo: '8', dueDate: '2024-07-30', description: 'Finalisation des plans d\'aménagement.' },
  { id: 't7', projectId: 'p2', title: 'Devis fournisseurs', status: TASK_STATUS.TODO, priority: TASK_PRIORITY.HIGH, assignedTo: '8', dueDate: '2024-08-15', description: 'Demande et comparaison des devis.' },
  { id: 't8', projectId: 'p3', title: 'Démolition cloisons existantes', status: TASK_STATUS.DONE, priority: TASK_PRIORITY.HIGH, assignedTo: '6', dueDate: '2024-06-30', description: 'Retrait des cloisons intérieures non porteuses.' },
  { id: 't9', projectId: 'p3', title: 'Charpente nouvelle aile', status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.URGENT, assignedTo: '5', dueDate: '2024-08-30', description: 'Construction de la charpente de l\'extension.' },
  { id: 't10', projectId: 'p3', title: 'Menuiseries extérieures', status: TASK_STATUS.TODO, priority: TASK_PRIORITY.MEDIUM, assignedTo: '10', dueDate: '2024-11-15', description: 'Pose des fenêtres et portes.' },
  { id: 't11', projectId: 'p5', title: 'Étude de sol', status: TASK_STATUS.DONE, priority: TASK_PRIORITY.HIGH, assignedTo: '5', dueDate: '2024-02-28', description: 'Analyse géotechnique du terrain.' },
  { id: 't12', projectId: 'p5', title: 'Permis de construire', status: TASK_STATUS.IN_PROGRESS, priority: TASK_PRIORITY.URGENT, assignedTo: '2', dueDate: '2024-04-30', description: 'Obtention du permis auprès de la mairie.' },
];

// --- Planning Phases ---
export const mockPhases = [
  { id: 'ph1', projectId: 'p1', name: 'Implantation', startDate: '2024-03-01', endDate: '2024-04-30', color: '#3b82f6' },
  { id: 'ph2', projectId: 'p1', name: 'Exécution - Gros œuvre', startDate: '2024-05-01', endDate: '2024-12-31', color: '#f59e0b' },
  { id: 'ph3', projectId: 'p1', name: 'Exécution - Second œuvre', startDate: '2025-01-01', endDate: '2025-04-30', color: '#10b981' },
  { id: 'ph4', projectId: 'p1', name: 'Finition', startDate: '2025-05-01', endDate: '2025-06-30', color: '#8b5cf6' },
  { id: 'ph5', projectId: 'p3', name: 'Implantation', startDate: '2024-05-15', endDate: '2024-06-30', color: '#3b82f6' },
  { id: 'ph6', projectId: 'p3', name: 'Exécution', startDate: '2024-07-01', endDate: '2025-01-31', color: '#f59e0b' },
  { id: 'ph7', projectId: 'p3', name: 'Finition', startDate: '2025-02-01', endDate: '2025-03-30', color: '#8b5cf6' },
];

// --- Messages ---
export const mockConversations = [
  {
    id: 'conv1',
    projectId: 'p1',
    projectName: 'Résidence Les Oliviers',
    lastMessage: 'Le béton sera livré demain matin à 7h.',
    lastMessageAt: '2024-07-15T14:32:00',
    unread: 3,
  },
  {
    id: 'conv2',
    projectId: 'p3',
    projectName: 'École Primaire Voltaire',
    lastMessage: 'J\'ai envoyé le rapport de chantier.',
    lastMessageAt: '2024-07-15T11:15:00',
    unread: 0,
  },
  {
    id: 'conv3',
    projectId: 'p2',
    projectName: 'Bureau Modern Office',
    lastMessage: 'Les plans sont validés.',
    lastMessageAt: '2024-07-14T16:45:00',
    unread: 1,
  },
  {
    id: 'conv4',
    projectId: 'p5',
    projectName: 'Centre Commercial Étoile',
    lastMessage: 'Chantier en pause jusqu\'à nouvel ordre.',
    lastMessageAt: '2024-07-10T09:00:00',
    unread: 0,
  },
];

export const mockMessages = [
  {
    id: 'm1', conversationId: 'conv1', senderId: '5', type: 'text',
    content: 'Bonjour à tous, le planning de la semaine est mis à jour.',
    timestamp: '2024-07-15T08:00:00',
  },
  {
    id: 'm2', conversationId: 'conv1', senderId: '4', type: 'text',
    content: 'Merci Sophie ! J\'ai noté les modifications pour l\'installation électrique.',
    timestamp: '2024-07-15T08:15:00',
  },
  {
    id: 'm3', conversationId: 'conv1', senderId: '6', type: 'text',
    content: 'Le ferraillage du RDC avance bien. On devrait finir cette section d\'ici vendredi.',
    timestamp: '2024-07-15T09:30:00',
  },
  {
    id: 'm4', conversationId: 'conv1', senderId: '2', type: 'text',
    content: 'Parfait ! Je passe sur le chantier cet après-midi pour vérifier.',
    timestamp: '2024-07-15T10:00:00',
  },
  {
    id: 'm5', conversationId: 'conv1', senderId: '5', type: 'audio',
    content: 'message-vocal-001.ogg',
    duration: '0:42',
    timestamp: '2024-07-15T11:20:00',
  },
  {
    id: 'm6', conversationId: 'conv1', senderId: '4', type: 'document',
    content: 'rapport-technique-juillet.pdf',
    fileSize: '2.4 MB',
    timestamp: '2024-07-15T13:00:00',
  },
  {
    id: 'm7', conversationId: 'conv1', senderId: '6', type: 'video',
    content: 'avancement-chantier.mp4',
    duration: '1:23',
    timestamp: '2024-07-15T14:00:00',
  },
  {
    id: 'm8', conversationId: 'conv1', senderId: '2', type: 'text',
    content: 'Le béton sera livré demain matin à 7h.',
    timestamp: '2024-07-15T14:32:00',
  },
  {
    id: 'm9', conversationId: 'conv2', senderId: '3', type: 'text',
    content: 'Comment avance la charpente ?',
    timestamp: '2024-07-15T09:00:00',
  },
  {
    id: 'm10', conversationId: 'conv2', senderId: '5', type: 'text',
    content: 'On est à 60% de l\'avancement prévu. Pas de retard.',
    timestamp: '2024-07-15T09:30:00',
  },
  {
    id: 'm11', conversationId: 'conv2', senderId: '4', type: 'document',
    content: 'rapport-chantier-ecole.pdf',
    fileSize: '1.8 MB',
    timestamp: '2024-07-15T11:15:00',
  },
];

// --- Subscriptions ---
export const subscriptionPlans = [
  {
    id: 'free',
    name: 'Free',
    price: '0€',
    period: '/mois',
    description: 'Pour découvrir BuildTrack',
    features: [
      { text: '1 chantier actif', included: true },
      { text: '3 membres max par chantier', included: true },
      { text: 'Messagerie basique', included: true },
      { text: 'Gestion de tâches', included: true },
      { text: 'Planning mensuel', included: false },
      { text: 'Export de rapports', included: false },
      { text: 'Support prioritaire', included: false },
      { text: 'API & intégrations', included: false },
    ],
    badge: null,
    popular: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '29€',
    period: '/mois',
    description: 'Pour les professionnels du bâtiment',
    features: [
      { text: '10 chantiers actifs', included: true },
      { text: 'Membres illimités', included: true },
      { text: 'Messagerie complète (audio, vidéo, docs)', included: true },
      { text: 'Gestion avancée de tâches', included: true },
      { text: 'Planning complet (jour/semaine/mois)', included: true },
      { text: 'Export de rapports PDF', included: true },
      { text: 'Support prioritaire', included: false },
      { text: 'API & intégrations', included: false },
    ],
    badge: 'Populaire',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '89€',
    period: '/mois',
    description: 'Pour les grandes entreprises',
    features: [
      { text: 'Chantiers illimités', included: true },
      { text: 'Membres illimités', included: true },
      { text: 'Messagerie complète', included: true },
      { text: 'Gestion avancée de tâches', included: true },
      { text: 'Planning complet avec Gantt', included: true },
      { text: 'Export de rapports avancés', included: true },
      { text: 'Support prioritaire 24/7', included: true },
      { text: 'API & intégrations personnalisées', included: true },
    ],
    badge: 'Premium',
    popular: false,
  },
];

// --- Stats (Admin) ---
export const mockAdminStats = {
  totalUsers: 156,
  totalOwners: 23,
  totalProjects: 89,
  activeProjects: 47,
  revenue: '12 450€',
  subscriptions: { free: 98, pro: 42, enterprise: 16 },
  monthlyGrowth: [
    { month: 'Jan', users: 45, projects: 12 },
    { month: 'Fév', users: 58, projects: 18 },
    { month: 'Mar', users: 72, projects: 25 },
    { month: 'Avr', users: 89, projects: 34 },
    { month: 'Mai', users: 110, projects: 42 },
    { month: 'Jun', users: 128, projects: 56 },
    { month: 'Jul', users: 156, projects: 67 },
  ],
};