const ExportNotesPayloadSchema = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const ExportsValidator = {
  validateExportNotesPayload: (payload) => {
    const validation = ExportNotesPayloadSchema.validate(payload);

    if (validation.error) {
      throw new InvariantError(validation.error.message);
    }
  },
};

module.exports = ExportsValidator;
