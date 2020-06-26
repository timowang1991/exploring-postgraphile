const { makeAddPgTableConditionPlugin } = require('graphile-utils');

module.exports = makeAddPgTableConditionPlugin(
    'app',
    'article',
    'earliestPublishedAt',
    build => ({ description: 'Article published on a given date or later', type: build.graphql.GraphQLString }),
    (value, helpers, build) => {
        const { sql } = helpers;
        return sql.fragment`published_at >= ${sql.value(value)}::date`
    }
);