module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 9002),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '519ee21d981b2cf8de164af1b32f2811'),
    },
  },
});
