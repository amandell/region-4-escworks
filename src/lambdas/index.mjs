import pkg from 'pg';
const { Pool } = pkg;
const pool = new Pool({
  user: process.env.USER_NAME,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.PASSWORD,
  port: 5432,
  ssl: {
      rejectUnauthorized: false
  }
});

export const handler = async (event) => {
  const {id} = event;
  try {
    await pool.connect();
    const query = (id) ? `
      select * from ${process.env.TABLE_NAME} p 
      inner join product_variants pv on p.product_id = pv.product_id 
      where p.product_id = '${id}'
    ` : 
    `select product_id, name as label, description from ${process.env.TABLE_NAME}`
    const result = await pool.query(query);
    return {
      statusCode: 200,
      body: JSON.stringify(result.rows)
    };
  } catch (err) {
    console.log('err', err);
  }
};
