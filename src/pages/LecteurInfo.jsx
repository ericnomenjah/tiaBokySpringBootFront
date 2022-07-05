import React from 'react'
import { Typography, Spin, Divider,Image, Row, Col, Alert} from "antd";
import LecteurIllustration from "../assets/lecteur.jpg";
import { useQuery } from 'react-query';
import LecteurService from "../api/lecteurs.js"
import { useParams } from 'react-router-dom';
const { Title } = Typography

const LecteurInfo = () => {
    const id = useParams().id
    const {isLoading,error,data} = useQuery("lecteur", ()=> LecteurService.getLecteurById(id))

    if(isLoading) return <Spin tip="Chargement ...">
        <Alert message="Recuperation des données" description="Veuillez patientez" type='info'/>
    </Spin>

    if(error) return <Spin tip="Oups, Erreur !!">
        <Alert message="Une erreur s'est produit lors de la recuperation des lecteurs" description="Veuillez patientez" type='info'/>
    </Spin>

  return (
    <>
        <Title level={2}>Informations du lecteur N° {data.id}</Title>
        <Divider/>
        <Row>
            <Col span={14}>
                <Row>
                    <Col span={6}> <Title level={5}>Nom :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.nom}</Title> </Col>
                </Row>
                <Row>
                    <Col span={6}> <Title level={5}>Prenom :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.prenom}</Title> </Col>
                </Row>
                <Row>
                    <Col span={6}> <Title level={5}>Adresse :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.adresse}</Title> </Col>
                </Row>
                <Row>
                    <Col span={6}> <Title level={5}>Date de Naissance :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.naissance}</Title> </Col>
                </Row>
                <Row>
                    <Col span={6}> <Title level={5}>Telephone :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.tel}</Title> </Col>
                </Row>
            </Col>
            <Col span={10}>
                <Image src={LecteurIllustration}/>
            </Col>
        </Row>
    </>
  )
}

export default LecteurInfo;