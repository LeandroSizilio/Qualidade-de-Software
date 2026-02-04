import { Injectable } from '@angular/core';

export interface DelegacyData {
  title: string;
  address: string;
  addressUrl: string;
  phone: string;
}

@Injectable({
  providedIn: 'root',
})
export class DelegacyService {
  // Constants to avoid string duplication
  private readonly NATAL_DELEGACY_TITLE =
    'Delegacia Especializada de Atendimento à Mulher em Natal';

  getNatalDelegacies(): DelegacyData[] {
    return [
      this.createDelegacy(
        this.NATAL_DELEGACY_TITLE,
        'Av. Capitão-Mor Gouveia, 1339 - Nossa Sra. de Nazaré, Natal - RN, 59060-400.',
        'https://www.google.com/maps/search/?api=1&query=Av.%20Capit%C3%A3o-Mor%20Gouveia%2C%201339%20-%20Nossa%20Sra.%20de%20Nazar%C3%A9%2C%20Natal%20-%20RN%2C%2059060-400',
        '(84) 98135-8077',
      ),
      this.createDelegacy(
        this.NATAL_DELEGACY_TITLE,
        'R. do Saneamento, 28 - Ribeira, Natal - RN, 59012-410.',
        'https://www.google.com/maps/search/?api=1&query=R.%20do%20Saneamento%2C%2028%20-%20Ribeira%2C%20Natal%20-%20RN%2C%2059012-410',
        '(84) 3232-2526',
      ),
      this.createDelegacy(
        this.NATAL_DELEGACY_TITLE,
        'R. Nossa Sra. de Candelária - Candelária, Natal - RN, 59065-490',
        'https://www.google.com/maps/search/?api=1&query=R.%20Nossa%20Sra.%20de%20Candel%C3%A1ria%20-%20Candel%C3%A1ria%2C%20Natal%20-%20RN%2C%2059065-490',
        '(84) 3232-2530',
      ),
      this.createDelegacy(
        this.NATAL_DELEGACY_TITLE,
        'Av. Hermes da Fonseca, 1174 - Tirol, Natal - RN, 59020-315',
        'https://www.google.com/maps/search/?api=1&query=Av.%20Hermes%20da%20Fonseca%2C%201174%20-%20Tirol%2C%20Natal%20-%20RN%2C%2059020-315',
        '',
      ),
      this.createDelegacy(
        this.NATAL_DELEGACY_TITLE,
        'Av. Guadalupe, 2145 - Potengi, Natal - RN, 59112-560',
        'https://www.google.com/maps/search/?api=1&query=Av.%20Guadalupe%2C%202145%20-%20Potengi%2C%20Natal%20-%20RN%2C%2059112-560',
        '(84) 98135-6792',
      ),
      this.createDelegacy(
        this.NATAL_DELEGACY_TITLE,
        'Av. Dr. João Medeiros Filho, S/N - Potengi, Natal - RN, 59110-200.',
        'https://www.google.com/maps/search/?api=1&query=Av.%20Dr.%20Jo%C3%A3o%20Medeiros%20Filho%2C%20S%2FN%20-%20Potengi%2C%20Natal%20-%20RN%2C%2059110-200',
        '(84) 3232-5468',
      ),
      this.createDelegacy(
        'Delegacia Especializada de Atendimento à Mulher em Parnamirim',
        'Av. Dr. Átila Paiva, 69 - Cohabinal, Parnamirim - RN, 59140-700',
        'https://www.google.com/maps/search/?api=1&query=Av.%20Dr.%20%C3%81tila%20Paiva%2C%2069%20-%20Cohabinal%2C%20Parnamirim%20-%20RN%2C%2059140-700',
        '(84) 98123-4114',
      ),
    ];
  }

  private createDelegacy(
    title: string,
    address: string,
    addressUrl: string,
    phone: string,
  ): DelegacyData {
    return { title, address, addressUrl, phone };
  }

  getInteriorDelegacies(): DelegacyData[] {
    return [
      {
        title: 'Delegacia Especializada de Atendimento à Mulher em Mossoró',
        address:
          'R. Julita G. Sena, 241 - Nova Betânia, Mossoró - RN, 59611-440',
        addressUrl:
          'https://www.google.com/maps/search/?api=1&query=R.%20Julita%20G.%20Sena%2C%20241%20-%20Nova%20Bet%C3%A2nia%2C%20Mossor%C3%B3%20-%20RN%2C%2059611-440',
        phone: '(84) 3315-3536',
      },
      {
        title: 'Delegacia Especializada de Atendimento à Mulher em Caicó',
        address:
          'Rua Dom Adelino Dantas, Cidade Judiciária, Maynard, Caicó/RN, CEP.: 59.300, 00000',
        addressUrl:
          'https://www.google.com/maps/search/?api=1&query=Rua%20Dom%20Adelino%20Dantas%2C%20Cidade%20Judici%C3%A1ria%2C%20Maynard%2C%20Caic%C3%B3%2FRN%2C%20CEP.%3A%2059.300%2C%2000000',
        phone: '(84) 98164-9513',
      },
    ];
  }
}
