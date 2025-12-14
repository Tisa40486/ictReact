import { useState, useEffect } from "react";
import "bulma/css/bulma.min.css";

function Planning({ userInfos }) {
    const [planningCours, setPlanningCours] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('http://193.108.54.49:8080/utgGETPlanningCours/1', {
                    method: "POST",
                    headers: { "Content-type": "application/json; charset=UTF-8" },
                    body: JSON.stringify({ level: 3, id: 21128 })
                });

                const data = await response.json();

                if (data.strErrorInfo) {
                    alert(data.strErrorInfo);
                    return;
                }

                const formatted = data
                    .filter(item => item.Session != "")
                    .map(item => ({
                        dateSession: item.Date_session,
                        session: item.Session || "Non renseigné"
                    }));

                setPlanningCours(formatted);

            } catch (error) {
                alert(error.message);
            }
        }

        fetchData();
    }, []);

    return (
        <>
            <p>userinfo : {userInfos}</p>
            <table className="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Cours</th>
                        <th>Lieu</th>
                    </tr>
                </thead>
                <tbody>
                    {planningCours.map((item, index) => (
                        <tr key={index}>
                            <td>
                                {item.dateSession && item.dateSession !== "0000-00-00"
                                    ? new Date(item.dateSession).toLocaleDateString("fr-FR")
                                    : "Date inconnue"}
                                <br />
                                {item.session || "Session inconnue"}
                            </td>
                            <td>
                                {item.Nom_du_cours || "Data inconnue"}  <br />
                                {item.Formateur || "Data inconnue"}
                            </td>
                            <td>
                                {item.Lieu_du_cours || "Data inconnue"}  <br />
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
        </>
    );
}

export default Planning;
