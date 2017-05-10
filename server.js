

const server = app.listen(PORT, () => {
  db.sequelize.sync({force: true});
});

module.exports = server;