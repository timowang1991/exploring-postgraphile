const { makeAddPgTableConditionPlugin } = require('graphile-utils');

module.exports = makeAddPgTableConditionPlugin(
    'app',
    'article',
    'minRating',
    build => ({ description: 'Article with minal rating', type: build.graphql.GraphQLInt }),
    (value, helpers, build) => {
        const { sql } = helpers;
        return sql.fragment`rating >= ${sql.value(value)}`
    }
);