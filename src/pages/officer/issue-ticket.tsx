export const IssueTicket = () => {
  return (
    <div className="container_issue_ticket">
      <form className="form_issue_ticket">
        <div className="form-row">
          <label htmlFor="name_issue_ticket">NAME:</label>
          <input type="text" id="name_issue_ticket" name="name_issue_ticket" />
        </div>
        <div className="form-row">
          <label htmlFor="id_issue_ticket">ID:</label>
          <input type="text" id="id_issue_ticket" name="id_issue_ticket" />
        </div>

        <div className="form-row">
          <label htmlFor="license_issue_ticket">LICENCE:</label>
          <input type="text" id="license_issue_ticket" name="license_issue_ticket" />
        </div>
        <div className="form-row">
          <label htmlFor="carplate_issue_ticket">CAR-PLATE:</label>
          <input type="text" id="carplate_issue_ticket" name="carplate_issue_ticket" />
        </div>
        <div className="form-row">
          <label htmlFor="location_issue_ticket">LOCATION:</label>
          <input type="text" id="location_issue_ticket" name="location_issue_ticket" />
        </div>

        <div className="form-row">
          <label htmlFor="date_issue_ticket">DATE:</label>
          <input type="date" id="date_issue_ticket" name="date_issue_ticket" />
        </div>

        <div className="form-row">
          <label htmlFor="violence_issue_ticket">VIOLENCE:</label>
          <input type="text" id="violence_issue_ticket" name="violence_issue_ticket" />
        </div>
        
        <div className="form-row">
          <button className="button_issue_ticket">ISSUE TICKET</button>
        </div>
        </form>
    </div>
  );
};
