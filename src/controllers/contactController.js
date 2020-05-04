const pool = require('../config/db');

const allContacts = async (req, res) => {
  try {
    const query = `
    SELECT * FROM contacts ORDER BY last_name ASC
    `;
    const { rows } = await pool.query(
      query,
      [],
    );
    res.send({
      status: 200,
      message: 'Contacts retrieved',
      data: rows,
    });
  } catch (err) {
    res.send({
      status: 404,
      message: err.message,
      data: null
    });
  }
}

const createContact = async (req, res) => {
  try {
    const { first_name, last_name, email, phone } = req.body;
    const query = `
      INSERT INTO contacts (first_name, last_name, email, phone) 
      VALUES ($1, $2, $3, $4)
    `;
    const { rows } = await pool.query(
      query,
      [first_name, last_name, email, phone],
    );
    res.send({
      status: 200,
      message: 'Contact has been added',
      data: { 
        first_name,
        last_name,
        email,
        phone,
      }
    });
  } catch (err) {
    res.send({
      status: 404,
      message: err.message,
      data: null
    });
  }
}

const getContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const query = `
      SELECT * FROM contacts WHERE contact_id = $1
    `;
    const { rows } = await pool.query(
      query,
      [contactId],
    );
    res.send({
      status: 200,
      message: 'Contact retrieved',
      data: rows[0],
    });
  } catch (err) {
    res.send({
      status: 404,
      message: err.message,
      data: null
    });
  }
}

const updateContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const { first_name, last_name, email, phone } = req.body;
    const query = `
      UPDATE contacts
      SET first_name = $1, last_name = $2, email = $3, phone = $4
      WHERE contact_id = $5
    `;
    const { rows } = await pool.query(
      query,
      [first_name, last_name, email, phone, contactId],
    );
    res.send({
      status: 200,
      message: 'Contact updated',
      data: { 
        first_name,
        last_name,
        email,
        phone,
      }
    });
  } catch (err) {
    res.send({
      status: 404,
      message: err.message,
      data: null
    });
  }
}

const deleteContact = async (req, res) => {
  try {
    const { contactId } = req.params;
    const query = `
      DELETE FROM contacts WHERE contact_id = $1
    `;
    const { rows } = await pool.query(
      query,
      [contactId],
    );
    res.send({
      status: 200,
      message: 'Contact deleted',
      data: rows[0],
    });
  } catch (err) {
    res.send({
      status: 404,
      message: err.message,
      data: null
    });
  }
}

module.exports = {
  allContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
}