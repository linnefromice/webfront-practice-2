import { faker } from "@faker-js/faker";
import { REQUIRED_FORM_ITEM_VALUES } from "../create_chiraceo/mocks";

export const DATAS = [...Array(100)].map((_) => ({
  ...REQUIRED_FORM_ITEM_VALUES,
  otsunagiManager: faker.name.findName(),
  otsunagiMailAddress: faker.internet.email(),
  otsunagiManagerTelNumber:
    Math.random() > 0.5
      ? faker.phone.phoneNumber("03-####-####")
      : faker.phone.phoneNumber("0##-###-####"),
}));
