export type FormData = {
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
    pa: string;
    dextro: string;
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
  intercorrencias: "Não houveram intercorrências nas ultimas 24h",
  acompanhante: "",
  dispositivos: [],
  sinaisVitais: {
    fr: "",
    fc: "",
    satO2: "",
    pa: "",
    dextro: "",
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