import React from 'react';
import { Jumbotron as Jumbo, Container, Table } from 'react-bootstrap';
import styled from 'styled-components';
import { InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';

const Styles = styled.div``;

function JumbSearch() {
    return (
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <Table>
                        <tr>
                            <th><label>Numéro de l'ordre  <input type="text" name="name" /></label></th>
                            <th><label>Date  <input type="text" name="name" /></label></th>
                            <th><input type="submit" value="Chercher" /></th>
                        </tr>

                        
                    </Table>
                </Container>
            </Jumbo>
        </Styles>
    )
}

export default JumbSearch;
