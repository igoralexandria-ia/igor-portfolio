import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import experienceData from "@/data/experience.json";
import educationData from "@/data/education.json";
import skillsData from "@/data/skills.json";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    fontFamily: "Helvetica",
    fontSize: 10,
    lineHeight: 1.4,
    color: "#333",
  },
  header: {
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#bae6fd",
    paddingBottom: 10,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0f172a",
    marginBottom: 8,
    textTransform: "uppercase",
  },
  role: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  summary: {
    fontSize: 9,
    marginBottom: 10,
    color: "#475569",
    textAlign: "justify",
  },
  contactContainer: {
    marginTop: 5,
    gap: 4,
  },
  contactRow: {
    flexDirection: "row",
    gap: 15,
    flexWrap: "wrap",
    marginBottom: 2,
  },
  contactItem: {
    fontSize: 9,
    color: "#334155",
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontWeight: "bold",
    color: "#0f172a",
    marginRight: 4,
  },
  link: {
    color: "#3b82f6",
    textDecoration: "none",
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: "bold",
    color: "#0f172a",
    borderBottomWidth: 1,
    borderBottomColor: "#e2e8f0",
    marginBottom: 8,
    paddingBottom: 2,
    textTransform: "uppercase",
  },
  experienceItem: {
    marginBottom: 8,
  },
  jobHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 2,
  },
  company: {
    fontWeight: "bold",
    fontSize: 10,
    color: "#1e293b",
  },
  date: {
    fontSize: 9,
    color: "#64748b",
  },
  jobRole: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#334155",
    marginBottom: 2,
    fontStyle: "italic",
  },
  description: {
    fontSize: 9,
    textAlign: "justify",
    color: "#475569",
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  skillPill: {
    fontSize: 9,
    color: "#334155",
    backgroundColor: "#f1f5f9",
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 2,
  },
  educationItem: {
    marginBottom: 6,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  eduContent: {
    width: "80%",
  },
  eduTitle: {
    fontSize: 9,
    fontWeight: "bold",
    color: "#1e293b",
  },
  eduInst: {
    fontSize: 9,
    color: "#475569",
  },
});

interface ResumePDFProps {
  userData: {
    name: string;
    role: string;
    email: string;
    phone: string;
    location: string;
    linkedin: string;
    github: string;
    summary: string;
  };
}

const ResumePDF = ({ userData }: ResumePDFProps) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{userData.name}</Text>
        <Text style={styles.role}>{userData.role}</Text>
        <Text style={styles.summary}>{userData.summary}</Text>

        {/* Contacts Grided */}
        <View style={styles.contactContainer}>
          <View style={styles.contactRow}>
            <Text style={styles.contactItem}>
              <Text style={styles.label}>Reside em:</Text> {userData.location}
            </Text>
            <Text style={styles.contactItem}>
              <Text style={styles.label}>Telefone:</Text> {userData.phone}
            </Text>
            <Text style={styles.contactItem}>
              <Text style={styles.label}>E-mail:</Text> {userData.email}
            </Text>
          </View>

          <View style={styles.contactRow}>
            <View style={styles.contactItem}>
              <Text style={styles.label}>LinkedIn:</Text>
              <Link
                src={`https://www.linkedin.com/in/${userData.linkedin}`}
                style={styles.link}
              >
                linkedin.com/in/{userData.linkedin}
              </Link>
            </View>
            <View style={styles.contactItem}>
              <Text style={styles.label}>GitHub:</Text>
              <Link src={userData.github} style={styles.link}>
                github.com/igoralexandria-ia
              </Link>
            </View>
          </View>
        </View>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        {experienceData.map((exp: any, index: number) => (
          <View key={index} style={styles.experienceItem}>
            <View style={styles.jobHeader}>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.date}>{exp.period}</Text>
            </View>
            <Text style={styles.jobRole}>{exp.role}</Text>
            <Text style={styles.description}>{exp.description}</Text>
          </View>
        ))}
      </View>

      {/* Skills & Education */}
      <View style={{ flexDirection: "row", gap: 20 }}>
        {/* Skills */}
        <View style={{ flex: 1 }}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills & Tecnologias</Text>
            <View style={styles.skillsContainer}>
              {skillsData.map((skill: string, index: number) => (
                <Text key={index} style={styles.skillPill}>
                  {skill}
                </Text>
              ))}
            </View>
          </View>

          {/* Languages */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Idiomas</Text>
            <Text style={{ fontSize: 9 }}>• Português (Nativo)</Text>
            <Text style={{ fontSize: 9, marginTop: 2 }}>
              • Inglês (Intermediário)
            </Text>
          </View>
        </View>

        {/* Education */}
        <View style={{ flex: 1.5 }}>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
            {educationData.map((edu: any, index: number) => (
              <View key={index} style={styles.educationItem}>
                <View style={styles.eduContent}>
                  <Text style={styles.eduTitle}>{edu.course}</Text>
                  <Text style={styles.eduInst}>{edu.institution}</Text>
                </View>
                <Text style={styles.date}>{edu.period}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export default ResumePDF;
