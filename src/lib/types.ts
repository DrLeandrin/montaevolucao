export type FormData = {
  queixas: string;
  exameFisicoFocado: string; // New field
  estadoGeral: string;
  consciencia: string;
  temperatura: string;
  freqRespiratoria: string;
  torax: string;
  auscultaPulmonar: string;
  auscultaCardiaca: string;
  abdomeInspecao: string;
  abdomePalpacao: string;
  abdomeAusculta: string;
  colaboracao: string;
  contato: string;
  fala: string;
  pensamento: string;
  humorAfeto: string;
  aceitacaoMedicamentos: string;
  perfusaoPeriferica: string;
  cianose: string;
  ictericia: string;
  palidez: string;
  hidratacao: string;
  estadoNutricional: string;
  mobilidade: string;
  aceitacaoDieta: string;
  sono: string;
  urina: string;
  habitoIntestinal: string;
  intercorrencias: string;
  acompanhante: string;
  dispositivos: string[];
  sinaisVitais: {
    fr: string;
    fc: string;
    satO2: string;
    pas: string;
    pad: string;
    dextro: string;
    temperatura: string;
  };
  laboratoriais: {
    eri: string;
    hb: string;
    ht: string;
    leuco: string;
    plaq: string;
    na: string;
    k: string;
    ur: string;
    cr: string;
    pcr: string;
  };
};

export const initialFormData: FormData = {
  queixas: "",
  exameFisicoFocado: "", // New field
  estadoGeral: "",
  consciencia: "",
  temperatura: "",
  freqRespiratoria: "",
  torax: "",
  auscultaPulmonar: "",
  auscultaCardiaca: "",
  abdomeInspecao: "",
  abdomePalpacao: "",
  abdomeAusculta: "",
  colaboracao: "",
  contato: "",
  fala: "",
  pensamento: "",
  humorAfeto: "",
  aceitacaoMedicamentos: "",
  perfusaoPeriferica: "",
  cianose: "",
  ictericia: "",
  palidez: "",
  hidratacao: "",
  estadoNutricional: "",
  mobilidade: "",
  aceitacaoDieta: "",
  sono: "",
  urina: "",
  habitoIntestinal: "",
  intercorrencias: "",
  acompanhante: "",
  dispositivos: [],
  sinaisVitais: {
    fr: "",
    fc: "",
    satO2: "",
    pas: "",
    pad: "",
    dextro: "",
    temperatura: "",
  },
  laboratoriais: {
    eri: "",
    hb: "",
    ht: "",
    leuco: "",
    plaq: "",
    na: "",
    k: "",
    ur: "",
    cr: "",
    pcr: "",
  },
};
