import pandas as pd
from scipy import stats

def ler_e_limpar_dados(caminho_csv):
    dados = pd.read_csv(caminho_csv)
    
    dados = dados.drop_duplicates()
    
    dados = dados.dropna()
    
    return dados

def gerar_relatorio_estatisticas(dados, coluna):
    media = dados[coluna].mean()
    mediana = dados[coluna].median()
    moda = stats.mode(dados[coluna])[0][0]
    
    print(f"Relatório de Estatísticas para a coluna '{coluna}':")
    print(f"Média: {media}")
    print(f"Mediana: {mediana}")
    print(f"Moda: {moda}")

def main():
    caminho_csv = input("Digite o caminho do arquivo CSV: ")
    dados = ler_e_limpar_dados(caminho_csv)
    
    coluna = input("Digite o nome da coluna para gerar o relatório de estatísticas: ")
    gerar_relatorio_estatisticas(dados, coluna)

if __name__ == "__main__":
    main()
