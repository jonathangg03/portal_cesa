const TABLE = "request";

module.exports = (store) => {
  const list = () => {
    return store.list(TABLE);
  };

  const upsert = (body, isNew) => {
    const request = {
      client: body.client,
      name: body.name,
      phone: body.phone,
      date: body.date,
      attendent: body.attendent,
      detail: body.detail,
    };

    return store.upsert(TABLE, request, isNew);
  };

  return {
    list,
    upsert,
  };
};
