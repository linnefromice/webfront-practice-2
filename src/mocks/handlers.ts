import faker from "@faker-js/faker";
import { REQUIRED_FORM_ITEM_VALUES } from "components/screens/paidMemberMng/consulting/create/mocks";
import { graphql } from "msw";

export const handlers = [
  graphql.query("GetConsultingForms", (req, res, ctx) => {
    return res(
      ctx.data({
        forms: [...Array(100)].map((_, i) => ({
          ...REQUIRED_FORM_ITEM_VALUES,
          hubspotId: `${i + 1}`,
          otsunagiManager: faker.name.findName(),
          otsunagiMailAddress: faker.internet.email(),
          otsunagiManagerTelNumber:
            Math.random() > 0.5
              ? faker.phone.phoneNumber("03-####-####")
              : faker.phone.phoneNumber("0##-###-####"),
        })),
      })
    );
  }),
];
