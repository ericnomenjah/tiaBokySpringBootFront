import React from 'react'
import { Typography, Spin, Divider,Image, Row, Col, Alert} from "antd";
import LivreIllustration from "../assets/livre.jpg";
import { useQuery } from 'react-query';
import LivreService from "../api/livres.js"
import { useParams } from 'react-router-dom';
const { Title } = Typography

const LivreInfo = () => {
    const id = useParams().id
    const {isLoading,error,data} = useQuery("livre", ()=> LivreService.getLivreById(id))

    if(isLoading) return <Spin tip="Chargement ...">
        <Alert message="Recuperation des données" description="Veuillez patientez" type='info'/>
    </Spin>

    if(error) return <Spin tip="Oups, Erreur !!">
        <Alert message="Une erreur s'est produit lors de la recuperation du livre" description="Veuillez patientez" type='info'/>
    </Spin>

  return (
    <>
        <Title level={2}>Informations du livre N° {data.id}</Title>
        <Divider/>
        <Row>
            <Col span={14}>
                <Row>
                    <Col span={6}> <Title level={5}>Titre :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.titre}</Title> </Col>
                </Row>
                <Row>
                    <Col span={6}> <Title level={5}>Autheur :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.autheur}</Title> </Col>
                </Row>
                <Row>
                    <Col span={6}> <Title level={5}>Date d'Edition :</Title> </Col>
                    <Col span={10}> <Title level={5}>{data.edition}</Title> </Col>
                </Row>

            </Col>
            <Col span={10}>
                <Image src={LivreIllustration}/>
            </Col>
        </Row>
    </>
  )
}

export default LivreInfo;