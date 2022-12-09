/**
 * Update Spots for current day. (one possible solution)
 *
 * @param {Object}   state           State Object.
 * @param {Object}   appointments    New Appointments array
 * @param {Object}   id              Optional appointment id (may not need)
 * @return {Array}   A Days array we can save back into state.
 */

const updateSpots = function(state, appointments, id) {
  const foundDay = state.days.find(d => d.appointments.includes(id));

  const spots = foundDay.appointments.filter(apptID => appointments[apptID].interview === null).length;

  const updatedDays = state.days.map(d => d.name === foundDay.name ? { ...foundDay, spots } : d);

  return updatedDays;
};

module.exports = updateSpots;
